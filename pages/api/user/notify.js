import notifyModel from "@/models/notify.model";


export default async function handler(req, res) {

  try {
    const {email } = req.body
    console.log(email, 'email');

    const isEmailExist = await notifyModel.findOne({userEmail : email})

  console.log(isEmailExist , 'isEmailExist');

    if (isEmailExist) {
      return res.status(400).json({msg : 'Email is already there', success : false})
    }

    console.log('1111');
    const notify = await notifyModel({
      userEmail :email
    })
    await notify.save()
    console.log('1122222');

    return res.status(201).json({msg : 'You will be notified', success : true})

  } catch (error) {
    return res.status(400).json({msg : 'Something wrong', success : false})
  }

}