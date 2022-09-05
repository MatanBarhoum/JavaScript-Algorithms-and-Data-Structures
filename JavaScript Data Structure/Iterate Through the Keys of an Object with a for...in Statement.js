const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
let onlineUsers = 0;
for (let user in usersObj) {
  if (usersObj[user]['online'] === true) {
    onlineUsers++;
  }
}
return onlineUsers;
}

console.log(countOnline(users));
