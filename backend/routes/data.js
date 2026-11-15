
const express = require ('express')
const data = require("../models/data");

const router = express.Router();



router.post('/api/data',async(req,res)=>{
    try{

    const {email, day, timing, firstname, lastname, number} = req.body;

    if (!email || !day || !timing || !firstname || !lastname || !number ){
        return res.status(404).json({
            'message': "something is misssing in data"
        })
    }

    const newdata = new data({
        email,
        day,
        timing,
        firstname,
        lastname,
        number
    })

    const savedata= await newdata.save();

    res.json({
        'message': "Data Saved successfully"
    })

    }catch(error){
        res.json({
            'message': "it has error",
            'error': error.message
        })
    }
})

router.get('/api/data/:id'), async (req,res)=>{
    try{
        const data = await data.findById(req.params.id)
        if(!data){
            res.status(404).json({
             'message':"data not found"
            })
        }

        res.json({
            'message':"data show",
            'data':data
        })
    }catch(error){
        res.status(500).json({
            'message':"data not fetched",
            'error': error.message
        })
    }
}

router.put('/api/data/:id', async (req,res)=>{
try{
    const {email, day, timing, firstname, lastname, number} = req.body
    const updatedata= await data.findByIdAndUpdate(req.params.id,
        {email, day, timing, firstname, lastname, number},
        {new:true}
    )
    if(!updatedata){
        return res.status(404).json({
            'message':"data not updated"
        })
    }

    res.json({
        'message':"product updated",
        'data':updatedata
    })
}catch(error){
    res.status(404).json({
        'message':"server error",
        'error':error.message
    });
}
})

router.delete('/api/data/:id', async(req,res)=>{
    try{
 const deletedata= await findByIdAndDelete(req.params.id);
    if(!deletedata){
         res.status(500).json({
            'message': "data not deleted"
        })
    }
    res.json({
            'message': "data delete successfully",
            'data': deletedata
        })
        }catch(error){
            res.status(404).json({
                'message':"server has an error",
                'error': error.message
            })
        }
})

module.exports = router;