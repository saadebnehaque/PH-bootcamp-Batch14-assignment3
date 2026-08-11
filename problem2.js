function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return 'Invalid'
    }

    if (users.some(user => !('name' in user) || !('isActive' in user))) {
        return 'Invalid';
    }
    return users.filter(user => user.isActive)
}



const usrs = [
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]
