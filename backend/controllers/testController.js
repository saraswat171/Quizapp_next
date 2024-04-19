const { testServices } = require("../services");

exports.addingtest = (async(req,res)=>{
    try{
        console.log("first")
        const userId = req.params.userId
        console.log('userId: ', userId);
        console.log('req.body: ', req.body);
        const response = await testServices.addedTest(req.body, userId);

        return res.status(201).json({message:"Success"}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});
exports.fetchingtest = (async(req,res)=>{
    try{
      console.log("jhdc")
        const response = await testServices.fetchedTest(req);

        return res.status(201).json({response}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});
exports.fetchTestbyId = (async(req,res)=>{
    try{
     const testId =req.params.testId
     console.log('testId: ', testId);
        const response = await testServices.fetchTestbyId(testId);

        return res.status(201).json({response}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});

exports.updateTestbyId = (async(req,res)=>{
    try{
     const testId =req.params.testId
     
     console.log('testId: ', testId);
        const response = await testServices.updateTestbyId(testId , req.body);

        return res.status(201).json({response}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});


// exports.bulkaddingtest = (async(req,res)=>{
//     try{
//         console.log("first")
//         const userId = req.params.userId
//         console.log('userId: ', userId);
//         console.log('req.body: ', req.body);
//         const response = await testServices.bulkaddedTest(req.body, userId);

//         return res.status(201).json({message:"Success"}); 
//     }
//     catch(e){
//         console.log("e: ", e?.message);
//         return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
//     }
// });

exports.deleteTestbyId = (async(req,res)=>{
    try{
     const testId =req.params.testId
     
     console.log('testId: ', testId);
        const response = await testServices.deleteTestbyId(testId , req.body);

        return res.status(201).json({response}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});