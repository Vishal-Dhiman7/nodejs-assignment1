const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName,fileContent,(err)=>{
		if(err){
			throw err;
		}
	})
}

const myFileReader = async (fileName) => {
	await fs.readFile(fileName,"utf-8",(err,read)=>{
		if(err) throw err;
		else
			console.log(read);
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,fileContent,(err)=>{
		if(err) throw err;
	})
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName,(err)=>{
		if(err){
			console.log(err);
		}
	})
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }