class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token
  attr_reader :password

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end

  def self.find_by_credentials(username,password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

end
