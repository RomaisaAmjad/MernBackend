module.exports = {
    generateHTML:function generateHTML(title,body){
    return(`<html><head><title>${title}</title></head><body>${body}</body></html>`);
},

    message:function(){
        return(`Hello World`);
    }
}


// This code and the above code works the same
// exports.generateHTML = function(title,body){
//     return(`<html><head><title>${title}</title></head><body>${body}</body></html>`);
// }
//exports.message = "Hello World!"