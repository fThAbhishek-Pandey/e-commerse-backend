function Pingcontroller3( req,res){
    console.log("Pingcontroller3")
    return res.send({message:'route folder ping3'});
}
module.exports = {Pingcontroller3}