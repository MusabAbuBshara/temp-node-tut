module.exports.items = ['item1' , 'item2']
const person = {
  name : 'bob'
}
module.exports.singlePerson = person
/*
now the <exports> object containes
exports{
    items : ['item1' , 'item2'],
    singlePerson : {
        name : 'bob'
      }
  }
*/