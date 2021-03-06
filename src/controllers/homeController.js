import CRUDService from "../services/CRUDService.js";


let getHomePage = (req, res) => {
	return res.render('homepage.ejs')
}

let getCRUD = (req, res)=>{
	return res.render('crud.ejs')
};
let postCRUD = async(req, res)=>{
	let message = await CRUDService.createNewUser(req.body);
	console.log(message)
	return res.send('post user from server')

};

module.exports = {
	getHomePage: getHomePage,
	getCRUD:getCRUD,
	postCRUD:postCRUD,
}