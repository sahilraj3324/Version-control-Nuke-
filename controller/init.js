
const fs = require("fs").promises
const path = require("path")

async function initrepo() {
    const repoPath = path.resolve(process.cwd() , ".NukeIt")
    const commitPath = path.join(repoPath , "commits")

    try{
      await fs.mkdir( repoPath , {recursive : true})
      await fs.mkdir( commitPath , {recursive : true})
      await fs.writeFile (
        path.join(repoPath , "config.json"),
        JSON.stringify({bucket : process.env.S3_BUCKET})
      )
      console.log("Repo Initialised")
    }
    catch (err){
        console.error("error initializing reposetory" , err)
    }
}

module.exports = {initrepo}