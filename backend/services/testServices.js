const { where, Op } = require('sequelize');
const CustomError = require('../libs/error');
const { Test } = require('../models');
const { User } = require('../models');
exports.addedTest = async (body, userId) => {
    try {
        // const { testName, instruction, duration } = body;
        // if (!testName || !instruction || !duration) {
        //     throw new CustomError('Fields are required', 400)
        // }
        const data = body;
        data.forEach(function(item) {
            item.userId=userId
            // console.log("my item=" ,item);
        });
        console.log('data: ', data[0]);
            var newTest;
            
             newTest    = (data?.length)>1 ? await Test.bulkCreate(data) : await Test.create(data[0]); 
        console.log('newTest: ', newTest);

        return newTest
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};


exports.fetchedTest = async (req) => {
    try {
        let search, testsearch;

        if (req.query) {
            search = req.query.search;
            testsearch = req.query.testsearch;

            //    const search1 = req.query.search;
            //    search= {$regex : new RegExp(search1 , 'i')}
            //       const testsearch1=req.query.testsearch;
            //       testsearch= {$regex : new RegExp(testsearch1 , 'i')}
            //       console.log('testsearch: ', testsearch);
        }
        //   if(search){
        //     userdata= await User.findOne({where:{name:search}})

        //   }
        const option = {
            where: !testsearch?.trim().length ? {} : { testName: { [Op.iRegexp]: testsearch } }, include: [
                { model: User, as: 'user', where: !search?.trim().length ? {} : { name: { [Op.iRegexp]: search } }  }
            ]
        };
        //  if(search){

        //     option.include[0].where.name = search;

        //  }


        // const testData = await
        //  Test.findAll({include:[
        //     {model:User ,as:'user'}
        //  ]});
        const testData = await
            Test.findAll(option);

        //  console.log('testData: ', testData);

        return testData
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};

exports.fetchTestbyId = async (testId) => {
    try {
        const testData = await
            Test.findOne({where:{uuid:testId}});
        return testData
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};

exports.updateTestbyId = async (testId, body) => {
    try {
        const {testName , instruction , duration}=body
        // console.log('testName , instruction , duration: ', testName , instruction , duration);
        const testData = await Test.update({testName:testName , instruction:"instruction",duration:duration},{where:{uuid:testId}});
        console.log('testData: ', testData);
         
        return testData
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};


// exports.bulkaddedTest = async (body, userId) => {
//     try {
//         const data = body;
//       data.forEach(function(item) {
//         item.userId=userId
//            // console.log("my item=" ,item);
//           });
//         console.log('data: ', data);
//         // if (!testName || !instruction || !duration) {
//         //     throw new CustomError('Fields are required', 400)
//         // }
//          const newTests = await Test.bulkCreate(data);
//          console.log('newTest: ', newTests);

//         // return newTest
//     }


//     catch (err) {
//         console.log("dd", err)
//         throw err;
//     }
// };

exports.deleteTestbyId = async (testId, body) => {
    try {
       
        const testData = await Test.destroy({where:{uuid:testId}});
        console.log('testData: ', testData);
         
        return testData
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};