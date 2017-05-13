json.currentUser @user, :id, :username

# // testing
# $.ajax({method: "POST", url:'api/users', data: {user: {username: 'john', password: 'password'}).then(res => console.log(res))
# $.ajax({method: "POST", url:'api/users', data: {user: {username: 'john', password: 'rd'}}}).then(res => console.log(res)).fail(err => console.log(err.responseJSON))
