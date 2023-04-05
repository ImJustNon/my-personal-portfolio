const config = require("../config.js");
const { calAge } = require("../../utils/calAge.js");


module.exports = {
    // ตัวเอง
    myself: [
        {
            title: [
                `ชื่อจริง`,
            ],
            description: [
                `นาย คณกร ไทยประโคน`
            ],
        },
        {
            title: [
                `ชื่อเล่น`,
            ],
            description: [
                `นนท์ , นน , ณณฑ์ 🤣`
            ],
        },
        {
            title: [
                `วันเกิด`,
            ],
            description: [
                `วันจันทร์ที่ 4 เดือนกันยายน พ.ศ.2549`
            ],
        },
        {
            title: [
                `อายุ`,
            ],
            description: [
                `${calAge(config.birthDate)} ขวบ`
            ],
        },
        {
            title: [
                `สัญชาติไทย`,
            ],
            description: [
                `ไทย`
            ],
        },
        {
            title: [
                `เชื้อชาติ`,
            ],
            description: [
                `ไทย`
            ],
        },
        {
            title: [
                `สีที่ชอบ`,
            ],
            description: [
                `สีเขียว`
            ],
        },
        {
            title: [
                `อาหารที่ชอบ`,
            ],
            description: [
                `ทุกอย่างที่กินได้ ยกเว้น 🥦`
            ],
        },
        {
            title: [
                `สัตว์ที่ชอบ`,
            ],
            description: [
                `สุนัข`
            ],
        },
        {
            title: [
                `สัตว์ที่ไม่ชอบ`,
            ],
            description: [
                `สัตว์ที่มีพิษ เเละ เเมลง`
            ],
        },
        {
            title: [
                `คติประจำใจ`,
            ],
            description: [
                `If it works don't touch it`
            ],
        },
        {
            title: [
                `พี่น้อง`,
            ],
            description: [
                `1 คน`
            ],
        },
        {
            title: [
                `งานอดิเรก`,
            ],
            description: [
                `ดูการ์ตูน เล่นเกม อ่านการ์ตูน`
            ],
        },
        {
            title: [
                `เบอร์โทรศัพท์`,
            ],
            description: [
                `086-409-2162 , 093-652-5578`,
            ],
        },
        {
            title: [
                `Line-ID`,
            ],
            description: [
                `non.kanakorn`
            ],
        },
        {
            title: [
                `Facebook`,
            ],
            description: [
                `Kanakorn Thaiprakhon`
            ],
        },
        {
            title: [
                `E-Mail`,
            ],
            description: [
                `non.kanakorn@gmail.com`,
                `i_Non.Kanakorn006@hotmail.com`
            ],
        },
        {
            title: [
                `ความสามารถพิเศษ`,
            ],
            description: [
                `สามารถใช้และแก้ปัญหาคอมพิวเตอร์ได้`,
                `เขียนโปรแกรมภาษา JavaScript ได้`,
            ],
        },
        {
            title: [
                `ความสนใจ`,
            ],
            description: [
                `สนใจเรื่อง Web Application เเละ`,
                `Backend web development`
            ],
        },
        {
            title: [
                `ที่อยู่ปัจจุบัน`,
            ],
            description: [
                `สมุทรปราการ ประเทศไทย`
            ],
        },
    ],
    dad: [
        {
            title: [
                `ชื่อบิดา`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        },
        {
            title: [
                `อาชีพ`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        },
        {
            title: [
                `เบอร์โทรศัพท์`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        }
    ],
    mom: [
        {
            title: [
                `ชื่อบิดา`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        },
        {
            title: [
                `อาชีพ`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        },
        {
            title: [
                `เบอร์โทรศัพท์`,
            ],
            description: [
                `ไม่บอก 😝`
            ],
        }
    ],
    school: [
        {
            img: `assets/images/portfolio/ssm.jpg`,
            url: `https://www.ssm.ac.th/`,
            title: [
                `จบการศึกษาระดับ มัธยมศึกษาปีที่3`,
                `โรงเรียนเซนต์เเมรี่ (สมุทรปราการ)`,
            ],
            description: [],
            button: {
                facebook: `https://web.facebook.com/SaintmarySM/`,
                website: `https://www.ssm.ac.th/`,
            },
            aosAnimation: `fade-right`,
        },
        {
            img: `assets/images/portfolio/sbtvc.jpg`,
            url: `http://sbtvc.ac.th/gcms/index.php`,
            title: [
                `กำลังศึกษาระดับ ปวช.`,
                `วิทยาลัยอาชีวศึกษาเทคโนโลยีฐานวิทยาศาสตร์ (ชลบุรี)`,
            ],
            description: [],
            button: {
                facebook: `https://web.facebook.com/sbtvc/`,
                website: `http://sbtvc.ac.th/gcms/index.php`,
            },
            aosAnimation: `fade-left`,
        },
    ],
}