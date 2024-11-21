 const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/himanshuyadav62')
    const data = await res.json()
    return data
}

export default githubInfoLoader; 