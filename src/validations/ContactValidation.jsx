import * as Yup from 'yup'
export const ContactValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خانوادگی الزامی می باشد'),
    email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی می باشد'),
    title: Yup.string().required('عنوان الزامی می باشد'),
    message: Yup.string().required('پیام الزامی می باشد'),
    recaptcha: Yup.string().required('من ربات نیستم الزامی می باشد'),
})