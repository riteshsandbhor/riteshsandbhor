// ============================================
// DATA LOADING OPTIONS
// ============================================
// Option 1: Hardcoded data (currently active)
// Option 2: Load from JSON file (uncomment loadVoterData call at bottom)
// Option 3: Load from CSV file (see loadFromCSV function)
// Option 4: Load from Google Sheets (see loadFromGoogleSheets function)
// ============================================

// Voter data - Embedded directly (works without server)
// This data is loaded from data/voters.json and embedded here for direct file access
let voterData = [
  {
    "voterNo": 1,
    "voterId": "5507599467",
    "fullNameMarathi": "सागर रामचंद्र लोहकरे",
    "fullNameEnglish": "Sagar Ramchandra Lohkare",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र लोहकरे",
    "relativeNameEnglish": "Father's Name: Ramchandra Lohkare",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 2,
    "voterId": "5501519222",
    "fullNameMarathi": "कल्पना जितेंद्र सांडभोर",
    "fullNameEnglish": "Kalpana Jitendra Sandbhor",
    "relativeNameMarathi": "पतीचे नाव : जितेंद्र सांडभोर",
    "relativeNameEnglish": "Husband's Name: Jitendra Sandbhor",
    "houseNoMarathi": "१०८",
    "houseNoEnglish": "108",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 3,
    "voterId": "5508593279",
    "fullNameMarathi": "जितेंद्र ज्ञानेश्वर सांडभोर",
    "fullNameEnglish": "Jitendra Gyaneshwar Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : ज्ञानेश्वर सांडभोर",
    "relativeNameEnglish": "Father's Name: Gyaneshwar Sandbhor",
    "houseNoMarathi": "९९०",
    "houseNoEnglish": "990",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 4,
    "voterId": "5509114539",
    "fullNameMarathi": "श्रुति सांडभोर",
    "fullNameEnglish": "Shruti Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : जितेंद्र सांडभोर",
    "relativeNameEnglish": "Father's Name: Jitendra Sandbhor",
    "houseNoMarathi": "सत्कारस्थळ",
    "houseNoEnglish": "Satkarsthal",
    "roomNo": "1",
    "age": 20,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 5,
    "voterId": "5509389826",
    "fullNameMarathi": "रिद्धी जितेंद्र सांडभोर",
    "fullNameEnglish": "Riddhi Jitendra Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : जितेंद्र सांडभोर",
    "relativeNameEnglish": "Father's Name: Jitendra Sandbhor",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 6,
    "voterId": "5507604002",
    "fullNameMarathi": "चंद्रशेखर रामचंद्र भगत",
    "fullNameEnglish": "Chandrashekhar Ramchandra Bhagat",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र भगत",
    "relativeNameEnglish": "Father's Name: Ramchandra Bhagat",
    "houseNoMarathi": "११५५",
    "houseNoEnglish": "1155",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 7,
    "voterId": "5507604069",
    "fullNameMarathi": "स्मिता चंद्रशेखर भगत",
    "fullNameEnglish": "Smita Chandrashekhar Bhagat",
    "relativeNameMarathi": "पतीचे नाव : चंद्रशेखर भगत",
    "relativeNameEnglish": "Husband's Name: Chandrashekhar Bhagat",
    "houseNoMarathi": "११५५",
    "houseNoEnglish": "1155",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 8,
    "voterId": "5507760275",
    "fullNameMarathi": "पुरुषोत्तम किसनराव भागवत",
    "fullNameEnglish": "Purushottam Kisannrao Bhagwat",
    "relativeNameMarathi": "वडिलांचे नाव : किसनराव भागवत",
    "relativeNameEnglish": "Father's Name: Kisannrao Bhagwat",
    "houseNoMarathi": "११५५",
    "houseNoEnglish": "1155",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 9,
    "voterId": "5507377054",
    "fullNameMarathi": "दिपाली निलेश कुंभार",
    "fullNameEnglish": "Dipalī Nilesh Kumbhar",
    "relativeNameMarathi": "पतीचे नाव : निलेश कुंभार",
    "relativeNameEnglish": "Husband's Name: Nilesh Kumbhar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 10,
    "voterId": "5507377179",
    "fullNameMarathi": "वनिता विशाल कुंभार",
    "fullNameEnglish": "Vanita Vishal Kumbhar",
    "relativeNameMarathi": "पतीचे नाव : विशाल कुंभार",
    "relativeNameEnglish": "Husband's Name: Vishal Kumbhar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 11,
    "voterId": "5507760168",
    "fullNameMarathi": "अशोक पंढरीनाथ राजापुरे",
    "fullNameEnglish": "Ashok Pandharinath Rajapure",
    "relativeNameMarathi": "वडिलांचे नाव : पंढरीनाथ राजापुरे",
    "relativeNameEnglish": "Father's Name: Pandharinath Rajapure",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 12,
    "voterId": "5507760127",
    "fullNameMarathi": "सीमा अशोक राजापुरे",
    "fullNameEnglish": "Seema Ashok Rajapure",
    "relativeNameMarathi": "पतीचे नाव : अशोक राजापुरे",
    "relativeNameEnglish": "Husband's Name: Ashok Rajapure",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 39,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 13,
    "voterId": "5508945339",
    "fullNameMarathi": "सुशीलकुमार सुकुमार उपाध्ये",
    "fullNameEnglish": "Sushilkumar Sukumar Upadhye",
    "relativeNameMarathi": "वडिलांचे नाव : सुकुमार उपाध्ये",
    "relativeNameEnglish": "Father's Name: Sukumar Upadhye",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 14,
    "voterId": "5508289415",
    "fullNameMarathi": "राजश्री सुशीलकुमार उपाध्ये",
    "fullNameEnglish": "Rajashri Sushilkumar Upadhye",
    "relativeNameMarathi": "पतीचे नाव : सुशीलकुमार उपाध्ये",
    "relativeNameEnglish": "Husband's Name: Sushilkumar Upadhye",
    "houseNoMarathi": "११५५",
    "houseNoEnglish": "1155",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 15,
    "voterId": "5501107212",
    "fullNameMarathi": "सायली अनिल शेळके",
    "fullNameEnglish": "Sayali Anil Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : अनिल शेळके",
    "relativeNameEnglish": "Father's Name: Anil Shelke",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 16,
    "voterId": "5501773381",
    "fullNameMarathi": "कार्तिकी सरडे",
    "fullNameEnglish": "Kartiki Sarade",
    "relativeNameMarathi": "वडिलांचे नाव : संजय सरडे",
    "relativeNameEnglish": "Father's Name: Sanjay Sarade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 17,
    "voterId": "5507512023",
    "fullNameMarathi": "सोनाली काशिनाथ मोरे",
    "fullNameEnglish": "Sonali Kashinath More",
    "relativeNameMarathi": "वडिलांचे नाव : काशिनाथ मोरे",
    "relativeNameEnglish": "Father's Name: Kashinath More",
    "houseNoMarathi": "कुमार कॉम्प्लेक्स",
    "houseNoEnglish": "Kumar Complex",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 18,
    "voterId": "5501107212",
    "fullNameMarathi": "प्रतिभा सुरेश कातळे",
    "fullNameEnglish": "Pratibha Suresh Katle",
    "relativeNameMarathi": "पतीचे नाव : सुरेश कातळे",
    "relativeNameEnglish": "Husband's Name: Suresh Katle",
    "houseNoMarathi": "१४८०७",
    "houseNoEnglish": "14807",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 19,
    "voterId": "5501773381",
    "fullNameMarathi": "प्रतिभा जवाहरलाल रुणवाल",
    "fullNameEnglish": "Pratibha Jawaharlal Runwal",
    "relativeNameMarathi": "पतीचे नाव : जवाहरलाल रुणवाल",
    "relativeNameEnglish": "Husband's Name: Jawaharlal Runwal",
    "houseNoMarathi": "५६०",
    "houseNoEnglish": "560",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 20,
    "voterId": "5507512023",
    "fullNameMarathi": "शैलेश बाळकृष्ण सांडभोर",
    "fullNameEnglish": "Shailesh Balkrishna Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : बाळकृष्ण सांडभोर",
    "relativeNameEnglish": "Father's Name: Balkrishna Sandbhor",
    "houseNoMarathi": "७०८",
    "houseNoEnglish": "708",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 21,
    "voterId": "KXH1079979",
    "fullNameMarathi": "मोतीलाल चुनिलाल रुणवाल",
    "fullNameEnglish": "Motilal Chunilal Runwal",
    "relativeNameMarathi": "वडिलांचे नाव : चुनिलाल रुणवाल",
    "relativeNameEnglish": "Father's Name: Chunilal Runwal",
    "houseNoMarathi": "७८०",
    "houseNoEnglish": "780",
    "roomNo": "1",
    "age": 97,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 22,
    "voterId": "5502089076",
    "fullNameMarathi": "साहेबराव शंकर शेळके",
    "fullNameEnglish": "Sahebrao Shankar Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर शेळके",
    "relativeNameEnglish": "Father's Name: Shankar Shelke",
    "houseNoMarathi": "१००४",
    "houseNoEnglish": "1004",
    "roomNo": "1",
    "age": 86,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 23,
    "voterId": "5502089068",
    "fullNameMarathi": "लिलाबाई साहेबराव शेळके",
    "fullNameEnglish": "Lilabai Sahebrao Shelke",
    "relativeNameMarathi": "पतीचे नाव : साहेबराव शेळके",
    "relativeNameEnglish": "Husband's Name: Sahebrao Shelke",
    "houseNoMarathi": "१००४",
    "houseNoEnglish": "1004",
    "roomNo": "1",
    "age": 81,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 24,
    "voterId": "5502089050",
    "fullNameMarathi": "अनिल साहेबराव शेळके",
    "fullNameEnglish": "Anil Sahebrao Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : साहेबराव शेळके",
    "relativeNameEnglish": "Father's Name: Sahebrao Shelke",
    "houseNoMarathi": "१००४",
    "houseNoEnglish": "1004",
    "roomNo": "1",
    "age": 56,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 25,
    "voterId": "5502089043",
    "fullNameMarathi": "साधना अनिल शेळके",
    "fullNameEnglish": "Sadhana Anil Shelke",
    "relativeNameMarathi": "पतीचे नाव : अनिल शेळके",
    "relativeNameEnglish": "Husband's Name: Anil Shelke",
    "houseNoMarathi": "१००४",
    "houseNoEnglish": "1004",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 26,
    "voterId": "5501521335",
    "fullNameMarathi": "दर्शना प्रकाश कहाणे",
    "fullNameEnglish": "Darshana Prakash Kahane",
    "relativeNameMarathi": "पतीचे नाव : प्रकाश कहाणे",
    "relativeNameEnglish": "Husband's Name: Prakash Kahane",
    "houseNoMarathi": "१०७८",
    "houseNoEnglish": "1078",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 27,
    "voterId": "5501522952",
    "fullNameMarathi": "उर्मिला विशाल कहाणे",
    "fullNameEnglish": "Urmila Vishal Kahane",
    "relativeNameMarathi": "पतीचे नाव : विशाल कहाणे",
    "relativeNameEnglish": "Husband's Name: Vishal Kahane",
    "houseNoMarathi": "१०७९",
    "houseNoEnglish": "1079",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 28,
    "voterId": "KXH1071828",
    "fullNameMarathi": "बबन कातळे",
    "fullNameEnglish": "Baban Katle",
    "relativeNameMarathi": "वडिलांचे नाव : बबन कातळे",
    "relativeNameEnglish": "Father's Name: Baban Katle",
    "houseNoMarathi": "४८०४",
    "houseNoEnglish": "4804",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 29,
    "voterId": "5507512247",
    "fullNameMarathi": "किशोर दयाराम कर्नावट",
    "fullNameEnglish": "Kishor Dayaram Karnavat",
    "relativeNameMarathi": "वडिलांचे नाव : दयाराम कर्नावट",
    "relativeNameEnglish": "Father's Name: Dayaram Karnavat",
    "houseNoMarathi": "१५८६/८७",
    "houseNoEnglish": "1586/87",
    "roomNo": "1",
    "age": 64,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 30,
    "voterId": "5501764992",
    "fullNameMarathi": "सुनीता किशोर कर्नावट",
    "fullNameEnglish": "Sunita Kishor Karnavat",
    "relativeNameMarathi": "पतीचे नाव : किशोर कर्नावट",
    "relativeNameEnglish": "Husband's Name: Kishor Karnavat",
    "houseNoMarathi": "१५८६/८७",
    "houseNoEnglish": "1586/87",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 31,
    "voterId": "5507158371",
    "fullNameMarathi": "बाबाजी सोपान पाटोळे",
    "fullNameEnglish": "Babaji Sopan Patole",
    "relativeNameMarathi": "वडिलांचे नाव : सोपान पाटोळे",
    "relativeNameEnglish": "Father's Name: Sopan Patole",
    "houseNoMarathi": "८३",
    "houseNoEnglish": "83",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 32,
    "voterId": "SSO7604267",
    "fullNameMarathi": "आयेशा तोसीन मोमिन",
    "fullNameEnglish": "Ayesha Tosin Momin",
    "relativeNameMarathi": "वडिलांचे नाव : तोसीन मोमिन",
    "relativeNameEnglish": "Father's Name: Tosin Momin",
    "houseNoMarathi": "११५५",
    "houseNoEnglish": "1155",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 33,
    "voterId": "SSO8915878",
    "fullNameMarathi": "जनाबाई बोर्हाडे",
    "fullNameEnglish": "Janabai Borhade",
    "relativeNameMarathi": "वडिलांचे नाव : नथू बोर्हाडे",
    "relativeNameEnglish": "Father's Name: Nathu Borhade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 76,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 34,
    "voterId": "SSO8221244",
    "fullNameMarathi": "श्रद्धा गणेश बाणखेले",
    "fullNameEnglish": "Shraddha Ganesh Bankhele",
    "relativeNameMarathi": "पतीचे नाव : गणेश बाणखेले",
    "relativeNameEnglish": "Husband's Name: Ganesh Bankhele",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 35,
    "voterId": "SSO8221194",
    "fullNameMarathi": "रामदास नामदेव भोंबे",
    "fullNameEnglish": "Ramdas Namdev Bhombe",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव भोंबे",
    "relativeNameEnglish": "Father's Name: Namdev Bhombe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 36,
    "voterId": "SSO8221186",
    "fullNameMarathi": "राधाबाई रामदास भोंबे",
    "fullNameEnglish": "Radhabai Ramdas Bhombe",
    "relativeNameMarathi": "पतीचे नाव : रामदास भोंबे",
    "relativeNameEnglish": "Husband's Name: Ramdas Bhombe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 37,
    "voterId": "SSO8221202",
    "fullNameMarathi": "शंकर नथू जाधव",
    "fullNameEnglish": "Shankar Nathu Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : नथू जाधव",
    "relativeNameEnglish": "Father's Name: Nathu Jadhav",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 38,
    "voterId": "SSO8221251",
    "fullNameMarathi": "सरिता हरक कारभारी",
    "fullNameEnglish": "Sarita Harak Karbhari",
    "relativeNameMarathi": "पतीचे नाव : हरक कारभारी",
    "relativeNameEnglish": "Husband's Name: Harak Karbhari",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 39,
    "voterId": "SSO8221277",
    "fullNameMarathi": "अनिकेत भगवान नाईकडे",
    "fullNameEnglish": "Aniket Bhagwan Naikade",
    "relativeNameMarathi": "वडिलांचे नाव : भगवान नाईकडे",
    "relativeNameEnglish": "Father's Name: Bhagwan Naikade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 40,
    "voterId": "SSO8221269",
    "fullNameMarathi": "प्राजक्ता भीमराव पाटील",
    "fullNameEnglish": "Prajakta Bhimrao Patil",
    "relativeNameMarathi": "वडिलांचे नाव : भीमराव पाटील",
    "relativeNameEnglish": "Father's Name: Bhimrao Patil",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 41,
    "voterId": "SSO8775462",
    "fullNameMarathi": "सोनाबाई शिंदे",
    "fullNameEnglish": "Sonabai Shinde",
    "relativeNameMarathi": "पतीचे नाव : शिंदे",
    "relativeNameEnglish": "Husband's Name: Shinde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 42,
    "voterId": "SSO8379190",
    "fullNameMarathi": "जयश्री सौंदणे",
    "fullNameEnglish": "Jayashri Saundane",
    "relativeNameMarathi": "पतीचे नाव : गोरक्ष सौंदणे",
    "relativeNameEnglish": "Husband's Name: Goraksh Saundane",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 43,
    "voterId": "SSO8281909",
    "fullNameMarathi": "संगीता राहुल सांडभोर",
    "fullNameEnglish": "Sangeeta Rahul Sandbhor",
    "relativeNameMarathi": "पतीचे नाव : राहुल सांडभोर",
    "relativeNameEnglish": "Husband's Name: Rahul Sandbhor",
    "houseNoMarathi": "लक्ष्मी पार्क",
    "houseNoEnglish": "Laxmi Park",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 44,
    "voterId": "SSO8278012",
    "fullNameMarathi": "दीपक महादेव बस्ते",
    "fullNameEnglish": "Deepak Mahadev Baste",
    "relativeNameMarathi": "वडिलांचे नाव : महादेव बस्ते",
    "relativeNameEnglish": "Father's Name: Mahadev Baste",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 45,
    "voterId": "SSO8277998",
    "fullNameMarathi": "स्नेहल दीपक बस्ते",
    "fullNameEnglish": "Snehal Deepak Baste",
    "relativeNameMarathi": "पतीचे नाव : दीपक बस्ते",
    "relativeNameEnglish": "Husband's Name: Deepak Baste",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 46,
    "voterId": "SSO8282071",
    "fullNameMarathi": "काजल सचिन भेंडाळे",
    "fullNameEnglish": "Kajal Sachin Bhendale",
    "relativeNameMarathi": "पतीचे नाव : सचिन भेंडाळे",
    "relativeNameEnglish": "Husband's Name: Sachin Bhendale",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 47,
    "voterId": "SSO8277774",
    "fullNameMarathi": "प्रियंका नचिकेत भुजबळ",
    "fullNameEnglish": "Priyanka Nachiket Bhujbal",
    "relativeNameMarathi": "पतीचे नाव : नचिकेत भुजबळ",
    "relativeNameEnglish": "Husband's Name: Nachiket Bhujbal",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 39,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 48,
    "voterId": "SSO8281982",
    "fullNameMarathi": "अनुराधा बाळू जाधव",
    "fullNameEnglish": "Anuradha Balu Jadhav",
    "relativeNameMarathi": "पतीचे नाव : बाळू जाधव",
    "relativeNameEnglish": "Husband's Name: Balu Jadhav",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 49,
    "voterId": "SSO8281891",
    "fullNameMarathi": "सोनाली संदीप क्षीरगर",
    "fullNameEnglish": "Sonali Sandip Kshirgar",
    "relativeNameMarathi": "पतीचे नाव : संदीप क्षीरगर",
    "relativeNameEnglish": "Husband's Name: Sandip Kshirgar",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 50,
    "voterId": "SSO8281172",
    "fullNameMarathi": "बाळू वामन संद्धोर",
    "fullNameEnglish": "Balu Vaman Sandhor",
    "relativeNameMarathi": "वडिलांचे नाव : वामन संद्धोर",
    "relativeNameEnglish": "Father's Name: Vaman Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 67,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 51,
    "voterId": "SSO8277576",
    "fullNameMarathi": "अलका पोपटराव संद्धोर",
    "fullNameEnglish": "Alka Popatrav Sandhor",
    "relativeNameMarathi": "पतीचे नाव : पोपटराव संद्धोर",
    "relativeNameEnglish": "Husband's Name: Popatrav Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 65,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 52,
    "voterId": "SSO8277451",
    "fullNameMarathi": "सुनील पोपटराव संद्धोर",
    "fullNameEnglish": "Sunil Popatrav Sandhor",
    "relativeNameMarathi": "वडिलांचे नाव : पोपटराव संद्धोर",
    "relativeNameEnglish": "Father's Name: Popatrav Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 44,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 53,
    "voterId": "SSO8281461",
    "fullNameMarathi": "विशाल पोपट संद्धोर",
    "fullNameEnglish": "Vishal Popat Sandhor",
    "relativeNameMarathi": "वडिलांचे नाव : पोपट संद्धोर",
    "relativeNameEnglish": "Father's Name: Popat Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 54,
    "voterId": "SSO8281248",
    "fullNameMarathi": "राहुल बाळासाहेब संद्धोर",
    "fullNameEnglish": "Rahul Balasaheb Sandhor",
    "relativeNameMarathi": "वडिलांचे नाव : बाळासाहेब संद्धोर",
    "relativeNameEnglish": "Father's Name: Balasaheb Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 55,
    "voterId": "SSO8281339",
    "fullNameMarathi": "वृषाली दत्तात्रय संद्धोर",
    "fullNameEnglish": "Vrushali Dattatray Sandhor",
    "relativeNameMarathi": "पतीचे नाव : दत्तात्रय संद्धोर",
    "relativeNameEnglish": "Husband's Name: Dattatray Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 56,
    "voterId": "SSO8277956",
    "fullNameMarathi": "श्रद्धा सुधीर संद्धोर",
    "fullNameEnglish": "Shraddha Sudhir Sandhor",
    "relativeNameMarathi": "पतीचे नाव : सुधीर संद्धोर",
    "relativeNameEnglish": "Husband's Name: Sudhir Sandhor",
    "houseNoMarathi": "राजगुरुनगर",
    "houseNoEnglish": "Rajagurunagar",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 57,
    "voterId": "SSO8272395",
    "fullNameMarathi": "विक्रम प्रकाश चव्हाण",
    "fullNameEnglish": "Vikram Prakash Chavan",
    "relativeNameMarathi": "वडिलांचे नाव : प्रकाश चव्हाण",
    "relativeNameEnglish": "Father's Name: Prakash Chavan",
    "houseNoMarathi": "टेल्को कॉलनी",
    "houseNoEnglish": "Telco Colony",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 58,
    "voterId": "SSO8272114",
    "fullNameMarathi": "सुनीता विक्रम चव्हाण",
    "fullNameEnglish": "Sunita Vikram Chavan",
    "relativeNameMarathi": "पतीचे नाव : विक्रम चव्हाण",
    "relativeNameEnglish": "Husband's Name: Vikram Chavan",
    "houseNoMarathi": "टेल्को कॉलनी",
    "houseNoEnglish": "Telco Colony",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 59,
    "voterId": "SSO8282691",
    "fullNameMarathi": "पवन सुरेश हुंडारे",
    "fullNameEnglish": "Pavan Suresh Hundare",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश हुंडारे",
    "relativeNameEnglish": "Father's Name: Suresh Hundare",
    "houseNoMarathi": "टेल्को कॉलनी",
    "houseNoEnglish": "Telco Colony",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 60,
    "voterId": "SSO8273526",
    "fullNameMarathi": "रविराज रामचंद्र जाधव",
    "fullNameEnglish": "Raviraj Ramchandra Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र जाधव",
    "relativeNameEnglish": "Father's Name: Ramchandra Jadhav",
    "houseNoMarathi": "१८०० कॉलनी",
    "houseNoEnglish": "1800 Colony",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 61,
    "voterId": "SSO8273971",
    "fullNameMarathi": "वृषाली संदीप किर्वे",
    "fullNameEnglish": "Vrushali Sandip Kirve",
    "relativeNameMarathi": "पतीचे नाव : संदीप किर्वे",
    "relativeNameEnglish": "Husband's Name: Sandip Kirve",
    "houseNoMarathi": "१००० कॉलनी",
    "houseNoEnglish": "1000 Colony",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 62,
    "voterId": "SSO8273054",
    "fullNameMarathi": "लक्ष्मी महादेव शिंदे",
    "fullNameEnglish": "Laxmi Mahadev Shinde",
    "relativeNameMarathi": "पतीचे नाव : महादेव शिंदे",
    "relativeNameEnglish": "Husband's Name: Mahadev Shinde",
    "houseNoMarathi": "१८००",
    "houseNoEnglish": "1800",
    "roomNo": "1",
    "age": 64,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 63,
    "voterId": "SSO8273138",
    "fullNameMarathi": "सोमनाथ महादेव शिंदे",
    "fullNameEnglish": "Somnath Mahadev Shinde",
    "relativeNameMarathi": "वडिलांचे नाव : महादेव शिंदे",
    "relativeNameEnglish": "Father's Name: Mahadev Shinde",
    "houseNoMarathi": "१६००",
    "houseNoEnglish": "1600",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 64,
    "voterId": "SSO8272759",
    "fullNameMarathi": "अशोक बारकू ठुबे",
    "fullNameEnglish": "Ashok Barku Thube",
    "relativeNameMarathi": "वडिलांचे नाव : बारकू ठुबे",
    "relativeNameEnglish": "Father's Name: Barku Thube",
    "houseNoMarathi": "१००",
    "houseNoEnglish": "100",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 65,
    "voterId": "SSO8272908",
    "fullNameMarathi": "सुवर्णा अशोक ठुबे",
    "fullNameEnglish": "Suvarna Ashok Thube",
    "relativeNameMarathi": "पतीचे नाव : अशोक ठुबे",
    "relativeNameEnglish": "Husband's Name: Ashok Thube",
    "houseNoMarathi": "१८००",
    "houseNoEnglish": "1800",
    "roomNo": "1",
    "age": 50,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 66,
    "voterId": "SSO8283335",
    "fullNameMarathi": "सरला शेषराव लिमगुडे",
    "fullNameEnglish": "Sarla Sheshrao Limgude",
    "relativeNameMarathi": "पतीचे नाव : शेषराव लिमगुडे",
    "relativeNameEnglish": "Husband's Name: Sheshrao Limgude",
    "houseNoMarathi": "४४८०५०",
    "houseNoEnglish": "448050",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 67,
    "voterId": "SSO8282907",
    "fullNameMarathi": "तेजल लिमगुडे",
    "fullNameEnglish": "Tejal Limgude",
    "relativeNameMarathi": "आईचे नाव : सरला लिमगुडे",
    "relativeNameEnglish": "Mother's Name: Sarla Limgude",
    "houseNoMarathi": "४४८०५०",
    "houseNoEnglish": "448050",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 68,
    "voterId": "SSO8250474",
    "fullNameMarathi": "भाग्यश्री प्रशांत आहेर",
    "fullNameEnglish": "Bhagyashree Prashant Aher",
    "relativeNameMarathi": "पतीचे नाव : प्रशांत आहेर",
    "relativeNameEnglish": "Husband's Name: Prashant Aher",
    "houseNoMarathi": "१०००",
    "houseNoEnglish": "1000",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 69,
    "voterId": "SSO8250110",
    "fullNameMarathi": "तनिक्षा अजित बांबळे",
    "fullNameEnglish": "Taniksha Ajit Bambale",
    "relativeNameMarathi": "वडिलांचे नाव : अजित बांबळे",
    "relativeNameEnglish": "Father's Name: Ajit Bambale",
    "houseNoMarathi": "१८००",
    "houseNoEnglish": "1800",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 70,
    "voterId": "SSO8281792",
    "fullNameMarathi": "सुर्यकांत निगोजी जगदनकर",
    "fullNameEnglish": "Suryakant Nigoji Jagdankar",
    "relativeNameMarathi": "वडिलांचे नाव : निगोजी जगदनकर",
    "relativeNameEnglish": "Father's Name: Nigoji Jagdankar",
    "houseNoMarathi": "१०००",
    "houseNoEnglish": "1000",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 71,
    "voterId": "SSO8250243",
    "fullNameMarathi": "आशीष संदीप कडलग",
    "fullNameEnglish": "Ashish Sandip Kadlag",
    "relativeNameMarathi": "वडिलांचे नाव : संदीप कडलग",
    "relativeNameEnglish": "Father's Name: Sandip Kadlag",
    "houseNoMarathi": "१८००",
    "houseNoEnglish": "1800",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 72,
    "voterId": "SSO8289316",
    "fullNameMarathi": "दिपाली कैलास सांडभोर",
    "fullNameEnglish": "Dipalī Kailas Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : कैलास सांडभोर",
    "relativeNameEnglish": "Father's Name: Kailas Sandbhor",
    "houseNoMarathi": "१६००",
    "houseNoEnglish": "1600",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 73,
    "voterId": "SSO8250383",
    "fullNameMarathi": "प्रशांत कडू आहेर",
    "fullNameEnglish": "Prashant Kadu Aher",
    "relativeNameMarathi": "वडिलांचे नाव : कडू आहेर",
    "relativeNameEnglish": "Father's Name: Kadu Aher",
    "houseNoMarathi": "१०००",
    "houseNoEnglish": "1000",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 74,
    "voterId": "SSO8281446",
    "fullNameMarathi": "शुभांगी अनिकेत देशमुख",
    "fullNameEnglish": "Shubhangi Aniket Deshmukh",
    "relativeNameMarathi": "पतीचे नाव : अनिकेत देशमुख",
    "relativeNameEnglish": "Husband's Name: Aniket Deshmukh",
    "houseNoMarathi": "१८००",
    "houseNoEnglish": "1800",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 75,
    "voterId": "SSO1108087",
    "fullNameMarathi": "किर्ती चंद्रशेखर वाडेकर",
    "fullNameEnglish": "Kirti Chandrashekhar Wadekar",
    "relativeNameMarathi": "पतीचे नाव : चंद्रशेखर वाडेकर",
    "relativeNameEnglish": "Husband's Name: Chandrashekhar Wadekar",
    "houseNoMarathi": "१४३३",
    "houseNoEnglish": "1433",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 76,
    "voterId": "SSO7512312",
    "fullNameMarathi": "लिलाबाई घेवरचंद बलदोटा",
    "fullNameEnglish": "Lilabai Ghevar Chand Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : घेवरचंद बलदोटा",
    "relativeNameEnglish": "Father's Name: Ghevar Chand Baldota",
    "houseNoMarathi": "१०९६",
    "houseNoEnglish": "1096",
    "roomNo": "1",
    "age": 77,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 77,
    "voterId": "SSO7512320",
    "fullNameMarathi": "अनिल घेवरचंद बलदोटा",
    "fullNameEnglish": "Anil Ghevar Chand Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : घेवरचंद बलदोटा",
    "relativeNameEnglish": "Father's Name: Ghevar Chand Baldota",
    "houseNoMarathi": "१०९६",
    "houseNoEnglish": "1096",
    "roomNo": "1",
    "age": 58,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 78,
    "voterId": "SSO7512346",
    "fullNameMarathi": "सुनिल घेवरचंद बलदोटा",
    "fullNameEnglish": "Sunil Ghevar Chand Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : घेवरचंद बलदोटा",
    "relativeNameEnglish": "Father's Name: Ghevar Chand Baldota",
    "houseNoMarathi": "१०९६",
    "houseNoEnglish": "1096",
    "roomNo": "1",
    "age": 57,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 79,
    "voterId": "SSO7512338",
    "fullNameMarathi": "संगीता अनिल बलदोटा",
    "fullNameEnglish": "Sangeeta Anil Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : अनिल बलदोटा",
    "relativeNameEnglish": "Father's Name: Anil Baldota",
    "houseNoMarathi": "१०९६",
    "houseNoEnglish": "1096",
    "roomNo": "1",
    "age": 56,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 80,
    "voterId": "SSO7512353",
    "fullNameMarathi": "सुजाता सुनिल बलदोटा",
    "fullNameEnglish": "Sujata Sunil Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : सुनिल बलदोटा",
    "relativeNameEnglish": "Father's Name: Sunil Baldota",
    "houseNoMarathi": "१०९६",
    "houseNoEnglish": "1096",
    "roomNo": "1",
    "age": 54,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 81,
    "voterId": "SSO8126294",
    "fullNameMarathi": "शीतल संतोष बाणखेले",
    "fullNameEnglish": "Shital Santosh Bankhele",
    "relativeNameMarathi": "पतीचे नाव : संतोष बाणखेले",
    "relativeNameEnglish": "Husband's Name: Santosh Bankhele",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 82,
    "voterId": "SSO8126245",
    "fullNameMarathi": "कल्याणी संजय चौधरी",
    "fullNameEnglish": "Kalyani Sanjay Chaudhari",
    "relativeNameMarathi": "आईचे नाव : संजय चौधरी",
    "relativeNameEnglish": "Mother's Name: Sanjay Chaudhari",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 83,
    "voterId": "SSO8126401",
    "fullNameMarathi": "नंदकुमार भगवंत धायबर",
    "fullNameEnglish": "Nandkumar Bhagwant Dhaibar",
    "relativeNameMarathi": "वडिलांचे नाव : भगवंत धायबर",
    "relativeNameEnglish": "Father's Name: Bhagwant Dhaibar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 84,
    "voterId": "SSO8126328",
    "fullNameMarathi": "सुनिता नंदकुमार धायबर",
    "fullNameEnglish": "Sunita Nandkumar Dhaibar",
    "relativeNameMarathi": "पतीचे नाव : नंदकुमार धायबर",
    "relativeNameEnglish": "Husband's Name: Nandkumar Dhaibar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 39,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 85,
    "voterId": "SSO8126377",
    "fullNameMarathi": "मिलिंद सुकदेव ढूशिंग",
    "fullNameEnglish": "Milind Sukadev Dhusing",
    "relativeNameMarathi": "वडिलांचे नाव : सुकदेव ढूशिंग",
    "relativeNameEnglish": "Father's Name: Sukadev Dhusing",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 86,
    "voterId": "SSO8126302",
    "fullNameMarathi": "मीरा मिलिंद ढूशिंग",
    "fullNameEnglish": "Meera Milind Dhusing",
    "relativeNameMarathi": "पतीचे नाव : मिलिंद ढूशिंग",
    "relativeNameEnglish": "Husband's Name: Milind Dhusing",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 87,
    "voterId": "SSO8126278",
    "fullNameMarathi": "नितीन राणू म्हाळुंगकर",
    "fullNameEnglish": "Nitin Ranu Mhalungkar",
    "relativeNameMarathi": "वडिलांचे नाव : राणू म्हाळुंगकर",
    "relativeNameEnglish": "Father's Name: Ranu Mhalungkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 88,
    "voterId": "SSO8126260",
    "fullNameMarathi": "सुरज राणू म्हाळुंगकर",
    "fullNameEnglish": "Suraj Ranu Mhalungkar",
    "relativeNameMarathi": "वडिलांचे नाव : राणू म्हाळुंगकर",
    "relativeNameEnglish": "Father's Name: Ranu Mhalungkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 89,
    "voterId": "SSO8126419",
    "fullNameMarathi": "बाळासाहेब भिकाजी पिंगळे",
    "fullNameEnglish": "Balasaheb Bhikaji Pingale",
    "relativeNameMarathi": "वडिलांचे नाव : भिकाजी पिंगळे",
    "relativeNameEnglish": "Father's Name: Bhikaji Pingale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 90,
    "voterId": "SSO8126344",
    "fullNameMarathi": "सुवर्णा बाळासाहेब पिंगळे",
    "fullNameEnglish": "Suvarna Balasaheb Pingale",
    "relativeNameMarathi": "पतीचे नाव : बाळासाहेब पिंगळे",
    "relativeNameEnglish": "Husband's Name: Balasaheb Pingale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 91,
    "voterId": "SSO8126427",
    "fullNameMarathi": "साईराज बाळासाहेब पिंगळे",
    "fullNameEnglish": "Sairaj Balasaheb Pingale",
    "relativeNameMarathi": "वडिलांचे नाव : बाळासाहेब पिंगळे",
    "relativeNameEnglish": "Father's Name: Balasaheb Pingale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 92,
    "voterId": "SSO8126351",
    "fullNameMarathi": "सुमन गणपत तांबे",
    "fullNameEnglish": "Suman Ganpat Tambe",
    "relativeNameMarathi": "पतीचे नाव : गणपत तांबे",
    "relativeNameEnglish": "Husband's Name: Ganpat Tambe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 68,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 93,
    "voterId": "SSO8126393",
    "fullNameMarathi": "प्रवीण गणपत तांबे",
    "fullNameEnglish": "Pravin Ganpat Tambe",
    "relativeNameMarathi": "वडिलांचे नाव : गणपत तांबे",
    "relativeNameEnglish": "Father's Name: Ganpat Tambe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 94,
    "voterId": "SSO8126336",
    "fullNameMarathi": "आरती प्रवीण तांबे",
    "fullNameEnglish": "Aarti Pravin Tambe",
    "relativeNameMarathi": "पतीचे नाव : प्रवीण तांबे",
    "relativeNameEnglish": "Husband's Name: Pravin Tambe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 95,
    "voterId": "SSO8126443",
    "fullNameMarathi": "गणेश सतीश थिगळे",
    "fullNameEnglish": "Ganesh Satish Thigale",
    "relativeNameMarathi": "वडिलांचे नाव : सतीश थिगळे",
    "relativeNameEnglish": "Father's Name: Satish Thigale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 96,
    "voterId": "SSO8126385",
    "fullNameMarathi": "बबन वाघ",
    "fullNameEnglish": "Baban Vaggh",
    "relativeNameMarathi": "वडिलांचे नाव : बबन वाघ",
    "relativeNameEnglish": "Father's Name: Baban Vaggh",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 44,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 97,
    "voterId": "SSO8126310",
    "fullNameMarathi": "सुरेखा संपत वाघ",
    "fullNameEnglish": "Surekha Sampat Vaggh",
    "relativeNameMarathi": "पतीचे नाव : संपत वाघ",
    "relativeNameEnglish": "Husband's Name: Sampat Vaggh",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 98,
    "voterId": "SSO7512478",
    "fullNameMarathi": "ज्ञानेश्वर रंगनाथ सोनवणे",
    "fullNameEnglish": "Gyaneshwar Ranganath Sonavane",
    "relativeNameMarathi": "वडिलांचे नाव : रंगनाथ सोनवणे",
    "relativeNameEnglish": "Father's Name: Ranganath Sonavane",
    "houseNoMarathi": "५९२",
    "houseNoEnglish": "592",
    "roomNo": "1",
    "age": 77,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 99,
    "voterId": "SSO7512486",
    "fullNameMarathi": "शालिनी ज्ञानेश्वर सोनवणे",
    "fullNameEnglish": "Shalini Gyaneshwar Sonavane",
    "relativeNameMarathi": "पतीचे नाव : ज्ञानेश्वर सोनवणे",
    "relativeNameEnglish": "Husband's Name: Gyaneshwar Sonavane",
    "houseNoMarathi": "५९२",
    "houseNoEnglish": "592",
    "roomNo": "1",
    "age": 69,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 100,
    "voterId": "SSO7512494",
    "fullNameMarathi": "सिद्धार्थ ज्ञानेश्वर सोनवणे",
    "fullNameEnglish": "Siddharth Gyaneshwar Sonavane",
    "relativeNameMarathi": "वडिलांचे नाव : ज्ञानेश्वर सोनवणे",
    "relativeNameEnglish": "Father's Name: Gyaneshwar Sonavane",
    "houseNoMarathi": "५९२",
    "houseNoEnglish": "592",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 101,
    "voterId": "SSO7512502",
    "fullNameMarathi": "अर्चना सिद्धार्थ सोनवणे",
    "fullNameEnglish": "Archana Siddharth Sonavane",
    "relativeNameMarathi": "पतीचे नाव : सिद्धार्थ सोनवणे",
    "relativeNameEnglish": "Husband's Name: Siddharth Sonavane",
    "houseNoMarathi": "५९२",
    "houseNoEnglish": "592",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 102,
    "voterId": "SSO2089134",
    "fullNameMarathi": "सुरेश पोपटलाल पोखर्णा",
    "fullNameEnglish": "Suresh Popatlal Pokharna",
    "relativeNameMarathi": "वडिलांचे नाव : पोपटलाल पोखर्णा",
    "relativeNameEnglish": "Father's Name: Popatlal Pokharna",
    "houseNoMarathi": "६२७",
    "houseNoEnglish": "627",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 103,
    "voterId": "SSO7512510",
    "fullNameMarathi": "सविता सुरेश पोखर्णा",
    "fullNameEnglish": "Savita Suresh Pokharna",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश पोखर्णा",
    "relativeNameEnglish": "Father's Name: Suresh Pokharna",
    "houseNoMarathi": "६२७",
    "houseNoEnglish": "627",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 104,
    "voterId": "SSO4544565",
    "fullNameMarathi": "मयुरी सुरेश पोखर्णा",
    "fullNameEnglish": "Mayuri Suresh Pokharna",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश पोखर्णा",
    "relativeNameEnglish": "Father's Name: Suresh Pokharna",
    "houseNoMarathi": "६२७",
    "houseNoEnglish": "627",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 105,
    "voterId": "SSO4509857",
    "fullNameMarathi": "शरद निवृत्ती पतंगे",
    "fullNameEnglish": "Sharad Nivruttī Patange",
    "relativeNameMarathi": "वडिलांचे नाव : निवृत्ती पतंगे",
    "relativeNameEnglish": "Father's Name: Nivruttī Patange",
    "houseNoMarathi": "६९२",
    "houseNoEnglish": "692",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 106,
    "voterId": "SSO4509865",
    "fullNameMarathi": "अनिता शरद पतंगे",
    "fullNameEnglish": "Anita Sharad Patange",
    "relativeNameMarathi": "पतीचे नाव : शरद पतंगे",
    "relativeNameEnglish": "Husband's Name: Sharad Patange",
    "houseNoMarathi": "६९२",
    "houseNoEnglish": "692",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 107,
    "voterId": "SSO1108260",
    "fullNameMarathi": "जवाहर मोतीलाल रुणवाल",
    "fullNameEnglish": "Jawahar Motilal Runwal",
    "relativeNameMarathi": "वडिलांचे नाव : मोतीलाल रुणवाल",
    "relativeNameEnglish": "Father's Name: Motilal Runwal",
    "houseNoMarathi": "७८०",
    "houseNoEnglish": "780",
    "roomNo": "1",
    "age": 70,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 108,
    "voterId": "KXH1086271",
    "fullNameMarathi": "उज्वला जवाहर रुणवाल",
    "fullNameEnglish": "Ujwala Jawahar Runwal",
    "relativeNameMarathi": "वडिलांचे नाव : जवाहर रुणवाल",
    "relativeNameEnglish": "Father's Name: Jawahar Runwal",
    "houseNoMarathi": "७८०",
    "houseNoEnglish": "780",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 109,
    "voterId": "SSO4509923",
    "fullNameMarathi": "प्रतीक जवाहर रुणवाल",
    "fullNameEnglish": "Pratik Jawahar Runwal",
    "relativeNameMarathi": "वडिलांचे नाव : जवाहर रुणवाल",
    "relativeNameEnglish": "Father's Name: Jawahar Runwal",
    "houseNoMarathi": "७८०",
    "houseNoEnglish": "780",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 110,
    "voterId": "KXH1086610",
    "fullNameMarathi": "दिनेश गुलाबचंद बलदोटा",
    "fullNameEnglish": "Dinesh Gulabchand Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : गुलाबचंद बलदोटा",
    "relativeNameEnglish": "Father's Name: Gulabchand Baldota",
    "houseNoMarathi": "७८३",
    "houseNoEnglish": "783",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 111,
    "voterId": "SSO8126450",
    "fullNameMarathi": "अभिषेक पांडुरंग भोसकर",
    "fullNameEnglish": "Abhishek Pandurang Bhoskar",
    "relativeNameMarathi": "वडिलांचे नाव : पांडुरंग दिनकर भोसकर",
    "relativeNameEnglish": "Father's Name: Pandurang Dinkar Bhoskar",
    "houseNoMarathi": "११९६",
    "houseNoEnglish": "1196",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 112,
    "voterId": "SSO7760416",
    "fullNameMarathi": "रवींद्र पुंडलिक कडू",
    "fullNameEnglish": "Ravindra Pundalik Kaddu",
    "relativeNameMarathi": "वडिलांचे नाव : पुंडलिक कडू",
    "relativeNameEnglish": "Father's Name: Pundalik Kaddu",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 113,
    "voterId": "SSO7760440",
    "fullNameMarathi": "चित्रा रवींद्र कडू",
    "fullNameEnglish": "Chitra Ravindra Kaddu",
    "relativeNameMarathi": "पतीचे नाव : रवींद्र कडू",
    "relativeNameEnglish": "Husband's Name: Ravindra Kaddu",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 114,
    "voterId": "SSO7760408",
    "fullNameMarathi": "रवींद्र महादू काळे",
    "fullNameEnglish": "Ravindra Mahadu Kale",
    "relativeNameMarathi": "वडिलांचे नाव : महादू काळे",
    "relativeNameEnglish": "Father's Name: Mahadu Kale",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 58,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 115,
    "voterId": "SSO7760465",
    "fullNameMarathi": "सायली केदार कुलकर्णी",
    "fullNameEnglish": "Sayali Kedar Kulkarni",
    "relativeNameMarathi": "पतीचे नाव : केदार कुलकर्णी",
    "relativeNameEnglish": "Husband's Name: Kedar Kulkarni",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 116,
    "voterId": "SSO7760507",
    "fullNameMarathi": "संतोष रमेश कुटे",
    "fullNameEnglish": "Santosh Ramesh Kute",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश कुटे",
    "relativeNameEnglish": "Father's Name: Ramesh Kute",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 117,
    "voterId": "SSO7760549",
    "fullNameMarathi": "वैशाली बंडू मालकर",
    "fullNameEnglish": "Vaishali Bandu Malkar",
    "relativeNameMarathi": "पतीचे नाव : बंडू मालकर",
    "relativeNameEnglish": "Husband's Name: Bandu Malkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 118,
    "voterId": "SSO7760424",
    "fullNameMarathi": "संतोष दिनकर मुजुमदार",
    "fullNameEnglish": "Santosh Dinkar Mujumdar",
    "relativeNameMarathi": "वडिलांचे नाव : दिनकर मुजुमदार",
    "relativeNameEnglish": "Father's Name: Dinkar Mujumdar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 119,
    "voterId": "SSO7760457",
    "fullNameMarathi": "शिल्पा संतोष मुजुमदार",
    "fullNameEnglish": "Shilpa Santosh Mujumdar",
    "relativeNameMarathi": "पतीचे नाव : संतोष मुजुमदार",
    "relativeNameEnglish": "Husband's Name: Santosh Mujumdar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 46,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 120,
    "voterId": "SSO7841984",
    "fullNameMarathi": "बाळासाहेब चिमाजी नांगरे",
    "fullNameEnglish": "Balasaheb Chimaji Nagre",
    "relativeNameMarathi": "वडिलांचे नाव : चिमाजी नांगरे",
    "relativeNameEnglish": "Father's Name: Chimaji Nagre",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 121,
    "voterId": "SSO7760515",
    "fullNameMarathi": "शारदा शामलाल पारेख",
    "fullNameEnglish": "Sharada Shamlal Parekh",
    "relativeNameMarathi": "पतीचे नाव : शामलाल पारेख",
    "relativeNameEnglish": "Husband's Name: Shamlal Parekh",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 122,
    "voterId": "SSO7760473",
    "fullNameMarathi": "बाबासाहेब बसगौडा पाटील",
    "fullNameEnglish": "Babasaheb Basgouda Patil",
    "relativeNameMarathi": "वडिलांचे नाव : बसगौडा पाटील",
    "relativeNameEnglish": "Father's Name: Basgouda Patil",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 123,
    "voterId": "SSO7760499",
    "fullNameMarathi": "विद्या बाबासाहेब पाटील",
    "fullNameEnglish": "Vidya Babasaheb Patil",
    "relativeNameMarathi": "पतीचे नाव : बाबासाहेब पाटील",
    "relativeNameEnglish": "Husband's Name: Babasaheb Patil",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 124,
    "voterId": "SSO7760531",
    "fullNameMarathi": "ललिता गजानन सोनार",
    "fullNameEnglish": "Lalita Gajanan Sonar",
    "relativeNameMarathi": "पतीचे नाव : गजानन सोनार",
    "relativeNameEnglish": "Husband's Name: Gajanan Sonar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 125,
    "voterId": "SSO7760432",
    "fullNameMarathi": "सविता अमोल सुक्रे",
    "fullNameEnglish": "Savita Amol Sukre",
    "relativeNameMarathi": "पतीचे नाव : अमोल सुक्रे",
    "relativeNameEnglish": "Husband's Name: Amol Sukre",
    "houseNoMarathi": "१११८",
    "houseNoEnglish": "1118",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 126,
    "voterId": "SSO8126484",
    "fullNameMarathi": "संगीता संगीता थिगळे",
    "fullNameEnglish": "Sangeeta Sangeeta Thigale",
    "relativeNameMarathi": "पतीचे नाव : संगीता थिगळे",
    "relativeNameEnglish": "Husband's Name: Sangeeta Thigale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 46,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 127,
    "voterId": "SSO8223695",
    "fullNameMarathi": "सुरेखा अशोक कोतवाल",
    "fullNameEnglish": "Surekha Ashok Kotwal",
    "relativeNameMarathi": "पतीचे नाव : अशोक कोतवाल",
    "relativeNameEnglish": "Husband's Name: Ashok Kotwal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 128,
    "voterId": "SSO8223620",
    "fullNameMarathi": "योगेंद्र खूबीलाल राणा",
    "fullNameEnglish": "Yogendra Khubilal Rana",
    "relativeNameMarathi": "वडिलांचे नाव : खूबीलाल राणा",
    "relativeNameEnglish": "Father's Name: Khubilal Rana",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 129,
    "voterId": "SSO8223729",
    "fullNameMarathi": "दीपा ज्ञानेश्वर घुगे",
    "fullNameEnglish": "Deepa Gyaneshwar Ghuge",
    "relativeNameMarathi": "पतीचे नाव : ज्ञानेश्वर घुगे",
    "relativeNameEnglish": "Husband's Name: Gyaneshwar Ghuge",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 130,
    "voterId": "SSO8223653",
    "fullNameMarathi": "बाळासाहेब हरिभाऊ कोतवाल",
    "fullNameEnglish": "Balasaheb Haribhau Kotwal",
    "relativeNameMarathi": "वडिलांचे नाव : हरिभाऊ कोतवाल",
    "relativeNameEnglish": "Father's Name: Haribhau Kotwal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 72,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 131,
    "voterId": "SSO8223703",
    "fullNameMarathi": "अशोक बाळासाहेब कोतवाल",
    "fullNameEnglish": "Ashok Balasaheb Kotwal",
    "relativeNameMarathi": "वडिलांचे नाव : बाळासाहेब कोतवाल",
    "relativeNameEnglish": "Father's Name: Balasaheb Kotwal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 132,
    "voterId": "SSO8223679",
    "fullNameMarathi": "संतोष बाळासाहेब कोतवाल",
    "fullNameEnglish": "Santosh Balasaheb Kotwal",
    "relativeNameMarathi": "वडिलांचे नाव : बाळासाहेब कोतवाल",
    "relativeNameEnglish": "Father's Name: Balasaheb Kotwal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 133,
    "voterId": "SSO8223604",
    "fullNameMarathi": "रीना योगेंद्र राणा",
    "fullNameEnglish": "Reena Yogendra Rana",
    "relativeNameMarathi": "पतीचे नाव : योगेंद्र राणा",
    "relativeNameEnglish": "Husband's Name: Yogendra Rana",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 134,
    "voterId": "SSO7906399",
    "fullNameMarathi": "सुरेखा चंद्रकांत रोडे",
    "fullNameEnglish": "Surekha Chandrakant Rode",
    "relativeNameMarathi": "पतीचे नाव : चंद्रकांत रोडे",
    "relativeNameEnglish": "Husband's Name: Chandrakant Rode",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 135,
    "voterId": "SSO7906415",
    "fullNameMarathi": "प्रणव चंद्रकांत रोडे",
    "fullNameEnglish": "Pranav Chandrakant Rode",
    "relativeNameMarathi": "वडिलांचे नाव : चंद्रकांत रोडे",
    "relativeNameEnglish": "Father's Name: Chandrakant Rode",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 136,
    "voterId": "SSO7511579",
    "fullNameMarathi": "प्रीती कैलास वरकड",
    "fullNameEnglish": "Preeti Kailas Varkad",
    "relativeNameMarathi": "पतीचे नाव : कैलास वरकड",
    "relativeNameEnglish": "Husband's Name: Kailas Varkad",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 137,
    "voterId": "SSO7906407",
    "fullNameMarathi": "चंद्रकांत सोपान रोडे",
    "fullNameEnglish": "Chandrakant Sopan Rode",
    "relativeNameMarathi": "वडिलांचे नाव : सोपान रोडे",
    "relativeNameEnglish": "Father's Name: Sopan Rode",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 138,
    "voterId": "SSO8780595",
    "fullNameMarathi": "पल्लवी भडके",
    "fullNameEnglish": "Pallavi Bhadke",
    "relativeNameMarathi": "पतीचे नाव : शशिकांत भडके",
    "relativeNameEnglish": "Husband's Name: Shashikant Bhadke",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 139,
    "voterId": "SSO8780546",
    "fullNameMarathi": "बबनराव हाडवले",
    "fullNameEnglish": "Bababrao Hadavale",
    "relativeNameMarathi": "वडिलांचे नाव : बबनराव हाडवले",
    "relativeNameEnglish": "Father's Name: Bababrao Hadavale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 140,
    "voterId": "SSO8777062",
    "fullNameMarathi": "सुनीता महादेव पोखरकर",
    "fullNameEnglish": "Sunita Mahadev Pokharkar",
    "relativeNameMarathi": "पतीचे नाव : महादेव पोखरकर",
    "relativeNameEnglish": "Husband's Name: Mahadev Pokharkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 141,
    "voterId": "SSO8776346",
    "fullNameMarathi": "मोहिनी पोखरकर",
    "fullNameEnglish": "Mohini Pokharkar",
    "relativeNameMarathi": "पतीचे नाव : राकेश पोखरकर",
    "relativeNameEnglish": "Husband's Name: Rakesh Pokharkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 142,
    "voterId": "SSO8344806",
    "fullNameMarathi": "वर्षा साबळे",
    "fullNameEnglish": "Varsha Sable",
    "relativeNameMarathi": "पतीचे नाव : संतोष साबळे",
    "relativeNameEnglish": "Husband's Name: Santosh Sable",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 143,
    "voterId": "SSO8776684",
    "fullNameMarathi": "विनायक शिंदे",
    "fullNameEnglish": "Vinayak Shinde",
    "relativeNameMarathi": "वडिलांचे नाव : वसंत राव शिंदे",
    "relativeNameEnglish": "Father's Name: Vasant Rao Shinde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 144,
    "voterId": "SSO8315582",
    "fullNameMarathi": "प्रथमेश तापकीर",
    "fullNameEnglish": "Prathamesh Tapkir",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश तापकीर",
    "relativeNameEnglish": "Father's Name: Ramesh Tapkir",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 145,
    "voterId": "SSO9003161",
    "fullNameMarathi": "दिवाकर बाबुलाल निचळ",
    "fullNameEnglish": "Divakar Babulal Nichal",
    "relativeNameMarathi": "वडिलांचे नाव : बाबूलाल निचळ",
    "relativeNameEnglish": "Father's Name: Babulal Nichal",
    "houseNoMarathi": "तिन्हेवाडी रोड",
    "houseNoEnglish": "Tinhewadi Road",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 146,
    "voterId": "SSO9003476",
    "fullNameMarathi": "गणेश दत्तराव मोरे",
    "fullNameEnglish": "Ganesh Dattarao More",
    "relativeNameMarathi": "वडिलांचे नाव : दत्तराव मोरे",
    "relativeNameEnglish": "Father's Name: Dattarao More",
    "houseNoMarathi": "तिन्हेवाडी रोड",
    "houseNoEnglish": "Tinhewadi Road",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 147,
    "voterId": "SSO9003021",
    "fullNameMarathi": "रत्नमाला दिवाकर निचळ",
    "fullNameEnglish": "Ratnamala Divakar Nichal",
    "relativeNameMarathi": "पतीचे नाव : दिवाकर निचळ",
    "relativeNameEnglish": "Husband's Name: Divakar Nichal",
    "houseNoMarathi": "तिन्हेवाडी रोड",
    "houseNoEnglish": "Tinhewadi Road",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 148,
    "voterId": "SSO9003393",
    "fullNameMarathi": "मानस मच्छिंद्र सांडभोर",
    "fullNameEnglish": "Manas Machhindra Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : मच्छिंद्र सांडभोर",
    "relativeNameEnglish": "Father's Name: Machhindra Sandbhor",
    "houseNoMarathi": "टेल्को कॉलनी २",
    "houseNoEnglish": "Telco Colony 2",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 149,
    "voterId": "SSO9022740",
    "fullNameMarathi": "नम्रता ओमकार काजळे",
    "fullNameEnglish": "Namrata Omkar Kajale",
    "relativeNameMarathi": "पतीचे नाव : ओमकार काजळे",
    "relativeNameEnglish": "Husband's Name: Omkar Kajale",
    "houseNoMarathi": "टेल्को कॉलनी",
    "houseNoEnglish": "Telco Colony",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 150,
    "voterId": "SSO9003211",
    "fullNameMarathi": "मंदा भानुदास सांगळे",
    "fullNameEnglish": "Manda Bhanudas Sangale",
    "relativeNameMarathi": "पतीचे नाव : भानुदास सांगळे",
    "relativeNameEnglish": "Husband's Name: Bhanudas Sangale",
    "houseNoMarathi": "टेल्को कॉलनी २",
    "houseNoEnglish": "Telco Colony 2",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 151,
    "voterId": "SSO9003310",
    "fullNameMarathi": "किरण श्रावण वाघ",
    "fullNameEnglish": "Kiran Shravan Vaggh",
    "relativeNameMarathi": "वडिलांचे नाव : श्रावण वाघ",
    "relativeNameEnglish": "Father's Name: Shravan Vaggh",
    "houseNoMarathi": "टेल्को कॉलनी २",
    "houseNoEnglish": "Telco Colony 2",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 152,
    "voterId": "SSO9003260",
    "fullNameMarathi": "शरद वाडिले",
    "fullNameEnglish": "Sharad Wadile",
    "relativeNameMarathi": "वडिलांचे नाव : शरद वाडिले",
    "relativeNameEnglish": "Father's Name: Sharad Wadile",
    "houseNoMarathi": "टेल्को कॉलनी २",
    "houseNoEnglish": "Telco Colony 2",
    "roomNo": "1",
    "age": 20,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 153,
    "voterId": "SSO8217077",
    "fullNameMarathi": "प्रसाद गुलाब सुतार",
    "fullNameEnglish": "Prasad Gulab Sutar",
    "relativeNameMarathi": "वडिलांचे नाव : गुलाब सुतार",
    "relativeNameEnglish": "Father's Name: Gulab Sutar",
    "houseNoMarathi": "टेल्को कॉलनी नं ३",
    "houseNoEnglish": "Telco Colony No 3",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 154,
    "voterId": "SSO4509931",
    "fullNameMarathi": "नारायण पोपट खेतमाळीस",
    "fullNameEnglish": "Narayan Popat Khetmalis",
    "relativeNameMarathi": "वडिलांचे नाव : पोपट खेतमाळीस",
    "relativeNameEnglish": "Father's Name: Popat Khetmalis",
    "houseNoMarathi": "५४९",
    "houseNoEnglish": "549",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 155,
    "voterId": "SSO4509949",
    "fullNameMarathi": "स्वाती नारायण खेतमाळीस",
    "fullNameEnglish": "Swati Narayan Khetmalis",
    "relativeNameMarathi": "पतीचे नाव : नारायण खेतमाळीस",
    "relativeNameEnglish": "Husband's Name: Narayan Khetmalis",
    "houseNoMarathi": "५४९",
    "houseNoEnglish": "549",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 156,
    "voterId": "KXH1081637",
    "fullNameMarathi": "वृषाली दिनेश बलदोटा",
    "fullNameEnglish": "Vrushali Dinesh Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : दिनेश बलदोटा",
    "relativeNameEnglish": "Father's Name: Dinesh Baldota",
    "houseNoMarathi": "७८३",
    "houseNoEnglish": "783",
    "roomNo": "1",
    "age": 46,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 157,
    "voterId": "KXH1087469",
    "fullNameMarathi": "लता एकनाथ देवडे",
    "fullNameEnglish": "Lata Eknath Devde",
    "relativeNameMarathi": "वडिलांचे नाव : एकनाथ देवडे",
    "relativeNameEnglish": "Father's Name: Eknath Devde",
    "houseNoMarathi": "९७५",
    "houseNoEnglish": "975",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 158,
    "voterId": "KXH1087451",
    "fullNameMarathi": "एकनाथ रामचंद्र देवडे",
    "fullNameEnglish": "Eknath Ramchandra Devde",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र देवडे",
    "relativeNameEnglish": "Father's Name: Ramchandra Devde",
    "houseNoMarathi": "९७५",
    "houseNoEnglish": "975",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 159,
    "voterId": "SSO4509956",
    "fullNameMarathi": "मिनाक्षी धोंडु कंठाळे",
    "fullNameEnglish": "Meenakshi Dhondu Kanthale",
    "relativeNameMarathi": "पतीचे नाव : धोंडु कंठाळे",
    "relativeNameEnglish": "Husband's Name: Dhondu Kanthale",
    "houseNoMarathi": "९७६",
    "houseNoEnglish": "976",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 160,
    "voterId": "SSO2089241",
    "fullNameMarathi": "गणेश महादु पवळे",
    "fullNameEnglish": "Ganesh Mahadu Pavale",
    "relativeNameMarathi": "वडिलांचे नाव : महादु पवळे",
    "relativeNameEnglish": "Father's Name: Mahadu Pavale",
    "houseNoMarathi": "९७६",
    "houseNoEnglish": "976",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 161,
    "voterId": "SSO4544441",
    "fullNameMarathi": "धोंडु उत्तमअप्पा कंठाळे",
    "fullNameEnglish": "Dhondu Uttamappa Kanthale",
    "relativeNameMarathi": "वडिलांचे नाव : उत्तमअप्पा कंठाळे",
    "relativeNameEnglish": "Father's Name: Uttamappa Kanthale",
    "houseNoMarathi": "९७८",
    "houseNoEnglish": "978",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 162,
    "voterId": "SSO4544466",
    "fullNameMarathi": "राजेंद्र कृष्णाजी ढवळे",
    "fullNameEnglish": "Rajendra Krishnaji Dhavale",
    "relativeNameMarathi": "वडिलांचे नाव : कृष्णाजी ढवळे",
    "relativeNameEnglish": "Father's Name: Krishnaji Dhavale",
    "houseNoMarathi": "९७९",
    "houseNoEnglish": "979",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 163,
    "voterId": "SSO4544458",
    "fullNameMarathi": "संगीता राजेंद्र ढवळे",
    "fullNameEnglish": "Sangeeta Rajendra Dhavale",
    "relativeNameMarathi": "पतीचे नाव : राजेंद्र ढवळे",
    "relativeNameEnglish": "Husband's Name: Rajendra Dhavale",
    "houseNoMarathi": "९७९",
    "houseNoEnglish": "979",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 164,
    "voterId": "SSO4544474",
    "fullNameMarathi": "काशिनाथ विठ्ठल भोकरे",
    "fullNameEnglish": "Kashinath Viththal Bhokare",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल भोकरे",
    "relativeNameEnglish": "Father's Name: Viththal Bhokare",
    "houseNoMarathi": "९८०",
    "houseNoEnglish": "980",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 165,
    "voterId": "SSO4544482",
    "fullNameMarathi": "लक्ष्मी काशिनाथ भोकरे",
    "fullNameEnglish": "Lakshmi Kashinath Bhokare",
    "relativeNameMarathi": "पतीचे नाव : काशिनाथ भोकरे",
    "relativeNameEnglish": "Husband's Name: Kashinath Bhokare",
    "houseNoMarathi": "९८०",
    "houseNoEnglish": "980",
    "roomNo": "1",
    "age": 49,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 166,
    "voterId": "SSO4544508",
    "fullNameMarathi": "संदीप रघुनाथ पाटील",
    "fullNameEnglish": "Sandip Raghunath Patil",
    "relativeNameMarathi": "वडिलांचे नाव : रघुनाथ पाटील",
    "relativeNameEnglish": "Father's Name: Raghunath Patil",
    "houseNoMarathi": "९८१",
    "houseNoEnglish": "981",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 167,
    "voterId": "SSO4544516",
    "fullNameMarathi": "जयश्री संदीप पाटील",
    "fullNameEnglish": "Jayashri Sandip Patil",
    "relativeNameMarathi": "पतीचे नाव : संदीप पाटील",
    "relativeNameEnglish": "Husband's Name: Sandip Patil",
    "houseNoMarathi": "९८१",
    "houseNoEnglish": "981",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 168,
    "voterId": "SSO4544524",
    "fullNameMarathi": "बिभिषण अर्जुन तोरमल",
    "fullNameEnglish": "Bibhishan Arjun Toramal",
    "relativeNameMarathi": "वडिलांचे नाव : अर्जुन तोरमल",
    "relativeNameEnglish": "Father's Name: Arjun Toramal",
    "houseNoMarathi": "९८२",
    "houseNoEnglish": "982",
    "roomNo": "1",
    "age": 63,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 169,
    "voterId": "SSO4544557",
    "fullNameMarathi": "अश्विनी गोविंद तक्ते",
    "fullNameEnglish": "Ashwini Govind Takte",
    "relativeNameMarathi": "पतीचे नाव : गोविंद तक्ते",
    "relativeNameEnglish": "Husband's Name: Govind Takte",
    "houseNoMarathi": "९८४",
    "houseNoEnglish": "984",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 170,
    "voterId": "SSO1773464",
    "fullNameMarathi": "आत्माराम धनाजी बोरसे",
    "fullNameEnglish": "Atmaram Dhanaji Borse",
    "relativeNameMarathi": "वडिलांचे नाव : धनाजी बोरसे",
    "relativeNameEnglish": "Father's Name: Dhanaji Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 171,
    "voterId": "SSO0228903",
    "fullNameMarathi": "जिजाबाई आत्माराम बोरसे",
    "fullNameEnglish": "Jijabai Atmaram Borse",
    "relativeNameMarathi": "पतीचे नाव : आत्माराम बोरसे",
    "relativeNameEnglish": "Husband's Name: Atmaram Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 79,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 172,
    "voterId": "SSO0228929",
    "fullNameMarathi": "महेंद्र आत्माराम बोरसे",
    "fullNameEnglish": "Mahendra Atmaram Borse",
    "relativeNameMarathi": "वडिलांचे नाव : आत्माराम बोरसे",
    "relativeNameEnglish": "Father's Name: Atmaram Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 61,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 173,
    "voterId": "SSO0228911",
    "fullNameMarathi": "राजेंद्र आत्माराम बोरसे",
    "fullNameEnglish": "Rajendra Atmaram Borse",
    "relativeNameMarathi": "वडिलांचे नाव : आत्माराम बोरसे",
    "relativeNameEnglish": "Father's Name: Atmaram Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 174,
    "voterId": "SSO1773472",
    "fullNameMarathi": "जयश्री राजेंद्र बोरसे",
    "fullNameEnglish": "Jayashri Rajendra Borse",
    "relativeNameMarathi": "पतीचे नाव : राजेंद्र बोरसे",
    "relativeNameEnglish": "Husband's Name: Rajendra Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 175,
    "voterId": "SSO1773480",
    "fullNameMarathi": "ज्योती महेंद्र बोरसे",
    "fullNameEnglish": "Jyoti Mahendra Borse",
    "relativeNameMarathi": "पतीचे नाव : महेंद्र बोरसे",
    "relativeNameEnglish": "Husband's Name: Mahendra Borse",
    "houseNoMarathi": "४८०१",
    "houseNoEnglish": "4801",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 176,
    "voterId": "SSO4544490",
    "fullNameMarathi": "परमेश्वर निरपत यादव",
    "fullNameEnglish": "Parameshwar Nirapat Yadav",
    "relativeNameMarathi": "वडिलांचे नाव : निरपत यादव",
    "relativeNameEnglish": "Father's Name: Nirapat Yadav",
    "houseNoMarathi": "५१३/१",
    "houseNoEnglish": "513/1",
    "roomNo": "1",
    "age": 44,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 177,
    "voterId": "SSO2089324",
    "fullNameMarathi": "आसीर आलम शेख",
    "fullNameEnglish": "Asir Alam Sheikh",
    "relativeNameMarathi": "वडिलांचे नाव : आलम शेख",
    "relativeNameEnglish": "Father's Name: Alam Sheikh",
    "houseNoMarathi": "२०२९/३",
    "houseNoEnglish": "2029/3",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 178,
    "voterId": "SSO2089316",
    "fullNameMarathi": "आलम शेख",
    "fullNameEnglish": "Alam Sheikh",
    "relativeNameMarathi": "वडिलांचे नाव : आलम शेख",
    "relativeNameEnglish": "Father's Name: Alam Sheikh",
    "houseNoMarathi": "२०२९/३",
    "houseNoEnglish": "2029/3",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 179,
    "voterId": "SSO7863442",
    "fullNameMarathi": "सागर रामचंद्र लोहकरे",
    "fullNameEnglish": "Sagar Ramchandra Lohkare",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र लोहकरे",
    "relativeNameEnglish": "Father's Name: Ramchandra Lohkare",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 180,
    "voterId": "SSO7863715",
    "fullNameMarathi": "मोईन इस्माईल मोमीन",
    "fullNameEnglish": "Moeen Ismail Momin",
    "relativeNameMarathi": "वडिलांचे नाव : इस्माईल मोमीन",
    "relativeNameEnglish": "Father's Name: Ismail Momin",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 181,
    "voterId": "SSO1108236",
    "fullNameMarathi": "विशाल शंकर कुंभार",
    "fullNameEnglish": "Vishal Shankar Kumbhar",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर कुंभार",
    "relativeNameEnglish": "Father's Name: Shankar Kumbhar",
    "houseNoMarathi": "३०५०",
    "houseNoEnglish": "3050",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 182,
    "voterId": "SSO7512643",
    "fullNameMarathi": "निलेश शंकर कुंभार",
    "fullNameEnglish": "Nilesh Shankar Kumbhar",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर कुंभार",
    "relativeNameEnglish": "Father's Name: Shankar Kumbhar",
    "houseNoMarathi": "३०५०",
    "houseNoEnglish": "3050",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 183,
    "voterId": "SSO7760739",
    "fullNameMarathi": "नीता गणेश बोरा",
    "fullNameEnglish": "Nita Ganesh Bora",
    "relativeNameMarathi": "पतीचे नाव : गणेश बोरा",
    "relativeNameEnglish": "Husband's Name: Ganesh Bora",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 184,
    "voterId": "SSO7760762",
    "fullNameMarathi": "दीपक रमेश कदम",
    "fullNameEnglish": "Deepak Ramesh Kadam",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश कदम",
    "relativeNameEnglish": "Father's Name: Ramesh Kadam",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 29,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 185,
    "voterId": "SSO8768798",
    "fullNameMarathi": "पार्थ कहाणे",
    "fullNameEnglish": "Parth Kahane",
    "relativeNameMarathi": "वडिलांचे नाव : नितीन कहाणे",
    "relativeNameEnglish": "Father's Name: Nitin Kahane",
    "houseNoMarathi": "अभिमान श्री रेसिडेंसी",
    "houseNoEnglish": "Abhiman Shree Residency",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 186,
    "voterId": "SSO9023599",
    "fullNameMarathi": "श्रावणी सांडभोर",
    "fullNameEnglish": "Shravani Sandbhor",
    "relativeNameMarathi": "आईचे नाव : कावेरी सांडभोर",
    "relativeNameEnglish": "Mother's Name: Kaveri Sandbhor",
    "houseNoMarathi": "रुक्मिणी",
    "houseNoEnglish": "Rukmini",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 187,
    "voterId": "SSO8293375",
    "fullNameMarathi": "कुणाल श्रीराम मिंडे",
    "fullNameEnglish": "Kunal Shriram Minde",
    "relativeNameMarathi": "वडिलांचे नाव : श्रीराम मिंडे",
    "relativeNameEnglish": "Father's Name: Shriram Minde",
    "houseNoMarathi": "शांताई निवास",
    "houseNoEnglish": "Shantai Niwas",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 188,
    "voterId": "SSO8382368",
    "fullNameMarathi": "संग्राम कदमबांडे",
    "fullNameEnglish": "Sangram Kadambande",
    "relativeNameMarathi": "वडिलांचे नाव : दिलीपराव कदमबांडे",
    "relativeNameEnglish": "Father's Name: Diliprao Kadambande",
    "houseNoMarathi": "Oct-६५",
    "houseNoEnglish": "Oct-65",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 189,
    "voterId": "SSO8382350",
    "fullNameMarathi": "करिश्मा पोटे",
    "fullNameEnglish": "Karishma Pote",
    "relativeNameMarathi": "वडिलांचे नाव : रवींद्र पोटे",
    "relativeNameEnglish": "Father's Name: Ravindra Pote",
    "houseNoMarathi": "फ्लॅट नं ९, गीता अपार्टमेंट",
    "houseNoEnglish": "Flat No 9, Geeta Apartment",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 190,
    "voterId": "SSO7512684",
    "fullNameMarathi": "मोहन दगडु नंदकर",
    "fullNameEnglish": "Mohan Dagdu Nandkar",
    "relativeNameMarathi": "वडिलांचे नाव : दगडु नंदकर",
    "relativeNameEnglish": "Father's Name: Dagdu Nandkar",
    "houseNoMarathi": "५",
    "houseNoEnglish": "5",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 191,
    "voterId": "SSO7512692",
    "fullNameMarathi": "मंजुशा मोहन नंदकर",
    "fullNameEnglish": "Manjusha Mohan Nandkar",
    "relativeNameMarathi": "पतीचे नाव : मोहन नंदकर",
    "relativeNameEnglish": "Husband's Name: Mohan Nandkar",
    "houseNoMarathi": "५",
    "houseNoEnglish": "5",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 192,
    "voterId": "SSO8223638",
    "fullNameMarathi": "राहुल रमेश खैरनार",
    "fullNameEnglish": "Rahul Ramesh Khairnar",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश खैरनार",
    "relativeNameEnglish": "Father's Name: Ramesh Khairnar",
    "houseNoMarathi": "एआर",
    "houseNoEnglish": "AR",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 193,
    "voterId": "SSO9087743",
    "fullNameMarathi": "दत्तात्रय काशिनाथ गोपाळे",
    "fullNameEnglish": "Dattatray Kashinath Gopale",
    "relativeNameMarathi": "वडिलांचे नाव : राम गोपाळे",
    "relativeNameEnglish": "Father's Name: Ram Gopale",
    "houseNoMarathi": "९३",
    "houseNoEnglish": "93",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 194,
    "voterId": "SSO8769515",
    "fullNameMarathi": "निखिल पुरवंत",
    "fullNameEnglish": "Nikhil Purvant",
    "relativeNameMarathi": "वडिलांचे नाव : कोंडिभाऊ पुरवंत",
    "relativeNameEnglish": "Father's Name: Kondibhau Purvant",
    "houseNoMarathi": "१३९२-२",
    "houseNoEnglish": "1392-2",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 195,
    "voterId": "SSO4544615",
    "fullNameMarathi": "सोनाली अशोक नांगरे",
    "fullNameEnglish": "Sonali Ashok Nagre",
    "relativeNameMarathi": "वडिलांचे नाव : अशोक नांगरे",
    "relativeNameEnglish": "Father's Name: Ashok Nagre",
    "houseNoMarathi": "१८५६/३",
    "houseNoEnglish": "1856/3",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 196,
    "voterId": "SSO4544631",
    "fullNameMarathi": "सुभाष जयवंत टाकळकर",
    "fullNameEnglish": "Subhash Jaywant Takalkar",
    "relativeNameMarathi": "वडिलांचे नाव : जयवंत टाकळकर",
    "relativeNameEnglish": "Father's Name: Jaywant Takalkar",
    "houseNoMarathi": "१८५६/४",
    "houseNoEnglish": "1856/4",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 197,
    "voterId": "SSO4544649",
    "fullNameMarathi": "अनिता सुभाष टाकळकर",
    "fullNameEnglish": "Anita Subhash Takalkar",
    "relativeNameMarathi": "पतीचे नाव : सुभाष टाकळकर",
    "relativeNameEnglish": "Husband's Name: Subhash Takalkar",
    "houseNoMarathi": "१८५६/४",
    "houseNoEnglish": "1856/4",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 198,
    "voterId": "SSO9136367",
    "fullNameMarathi": "तन्मय कैलास घनवट",
    "fullNameEnglish": "Tanmay Kailash Ghanwat",
    "relativeNameMarathi": "वडिलांचे नाव : कैलास घनवट",
    "relativeNameEnglish": "Father's Name: Kailash Ghanwat",
    "houseNoMarathi": "मातोश्री निवास",
    "houseNoEnglish": "Matoshree Niwas",
    "roomNo": "1",
    "age": 21,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 199,
    "voterId": "SSO9138777",
    "fullNameMarathi": "रुतुज दिनेश बल्दोटा",
    "fullNameEnglish": "Rutuj Dinesh Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : दिनेश बल्दोटा",
    "relativeNameEnglish": "Father's Name: Dinesh Baldota",
    "houseNoMarathi": "अभिमान श्री रेसिडेंसी",
    "houseNoEnglish": "Abhiman Shree Residency",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 200,
    "voterId": "SSO9140716",
    "fullNameMarathi": "संस्कृती मधुकर गिलबिले",
    "fullNameEnglish": "Sanskriti Madhukar Gilbile",
    "relativeNameMarathi": "वडिलांचे नाव : मधुकर गिलबिले",
    "relativeNameEnglish": "Father's Name: Madhukar Gilbile",
    "houseNoMarathi": "विश्वदर्शन फ्लॅट नं ९०",
    "houseNoEnglish": "Vishwadarshan Flat No 90",
    "roomNo": "1",
    "age": 20,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 201,
    "voterId": "SSO9140740",
    "fullNameMarathi": "कैवल्य मधुकर गिलबिले",
    "fullNameEnglish": "Kaivalya Madhukar Gilbile",
    "relativeNameMarathi": "वडिलांचे नाव : मधुकर गिलबिले",
    "relativeNameEnglish": "Father's Name: Madhukar Gilbile",
    "houseNoMarathi": "विश्वदर्शन फ्लॅट नं ९०",
    "houseNoEnglish": "Vishwadarshan Flat No 90",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 202,
    "voterId": "SSO9156506",
    "fullNameMarathi": "आयुष जालिंदर गायकवाड",
    "fullNameEnglish": "Ayush Jalinder Gayakwad",
    "relativeNameMarathi": "वडिलांचे नाव : जालिंदर मारुती गायकवाड",
    "relativeNameEnglish": "Father's Name: Jalinder Maruti Gayakwad",
    "houseNoMarathi": "आनंद अपार्टमेंट",
    "houseNoEnglish": "Anand Apartment",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 203,
    "voterId": "SSO9161993",
    "fullNameMarathi": "आदिती सुरेश राक्षे",
    "fullNameEnglish": "Aditi Suresh Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश राक्षे",
    "relativeNameEnglish": "Father's Name: Suresh Rakshe",
    "houseNoMarathi": "रूम नं ०७",
    "houseNoEnglish": "Room No 07",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 204,
    "voterId": "SSO9162322",
    "fullNameMarathi": "तजीन मोमीन",
    "fullNameEnglish": "Tazin Momin",
    "relativeNameMarathi": "वडिलांचे नाव : सैय्यदनजिर मोमीन",
    "relativeNameEnglish": "Father's Name: Saiyadanjir Momin",
    "houseNoMarathi": "अभिमानश्री रेसिडेंसी",
    "houseNoEnglish": "Abhimanshree Residency",
    "roomNo": "1",
    "age": 20,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 205,
    "voterId": "SSO9172990",
    "fullNameMarathi": "दिशा बलदोटा",
    "fullNameEnglish": "Disha Baldota",
    "relativeNameMarathi": "आईचे नाव : वृषाली बलदोटा",
    "relativeNameEnglish": "Mother's Name: Vrushali Baldota",
    "houseNoMarathi": "अभिमानश्री रेसिडेंसी",
    "houseNoEnglish": "Abhimaanshri Residency",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 206,
    "voterId": "SSO9173006",
    "fullNameMarathi": "रूतिका बलदोटा",
    "fullNameEnglish": "Rutika Baldota",
    "relativeNameMarathi": "आईचे नाव : वृषाली बलदोटा",
    "relativeNameEnglish": "Mother's Name: Vrushali Baldota",
    "houseNoMarathi": "अभिमानश्री रेसिडेंसी",
    "houseNoEnglish": "Abhimanshri Residency",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 207,
    "voterId": "SSO9212879",
    "fullNameMarathi": "दर्शन लिमगुडे",
    "fullNameEnglish": "Darshan Limgude",
    "relativeNameMarathi": "वडिलांचे नाव : शेषराव दामोदर लिमगुडे",
    "relativeNameEnglish": "Father's Name: Sheshrao Damodar Limgude",
    "houseNoMarathi": "वाडा रोड रायगुरुनगर",
    "houseNoEnglish": "Wada Road Raigurunagar",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 208,
    "voterId": "SSO9215773",
    "fullNameMarathi": "सिद्धार्थ गिरीश नाईकडे",
    "fullNameEnglish": "Siddharth Girish Naikade",
    "relativeNameMarathi": "वडिलांचे नाव : गिरीश नाईकडे",
    "relativeNameEnglish": "Father's Name: Girish Naikade",
    "houseNoMarathi": "फ्लॅट नं २५ अथर्वा कॉन्स्ट्रक्शन",
    "houseNoEnglish": "Flat No 25 Atharva Construction",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 209,
    "voterId": "SSO9216003",
    "fullNameMarathi": "शिवानी गिरीश नाईकडे",
    "fullNameEnglish": "Shivani Girish Naikade",
    "relativeNameMarathi": "वडिलांचे नाव : गिरीश नाईकडे",
    "relativeNameEnglish": "Father's Name: Girish Naikade",
    "houseNoMarathi": "फ्लॅट नं २५ अथर्वा कॉन्स्ट्रक्शन",
    "houseNoEnglish": "Flat No 25 Atharva Construction",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 210,
    "voterId": "SSO9256744",
    "fullNameMarathi": "अदिति अनिल राक्षे",
    "fullNameEnglish": "Aditi Anil Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : अनिल राक्षे",
    "relativeNameEnglish": "Father's Name: Anil Rakshe",
    "houseNoMarathi": "गीता अपार्टमेंट",
    "houseNoEnglish": "Geeta Apartment",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 211,
    "voterId": "SSO9279118",
    "fullNameMarathi": "यश लुणावत",
    "fullNameEnglish": "Yash Lunavat",
    "relativeNameMarathi": "वडिलांचे नाव : अजित लुणावत",
    "relativeNameEnglish": "Father's Name: Ajit Lunavat",
    "houseNoMarathi": "पुण्याई बंगलो",
    "houseNoEnglish": "Punyai Bunglow",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 212,
    "voterId": "SSO9279118",
    "fullNameMarathi": "पियुष ज्ञानेश्वर गाडे",
    "fullNameEnglish": "Piyush Gyaneshwar Gade",
    "relativeNameMarathi": "वडिलांचे नाव : ज्ञानेश्वर गाडे",
    "relativeNameEnglish": "Father's Name: Gyaneshwar Gade",
    "houseNoMarathi": "वृंदावन सोसायटी",
    "houseNoEnglish": "Vrundawan Society",
    "roomNo": "1",
    "age": 21,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 213,
    "voterId": "SSO8225062",
    "fullNameMarathi": "गौरी मनोजकुमार फाकटकर",
    "fullNameEnglish": "Gauri Manojkumar Phakatkar",
    "relativeNameMarathi": "वडिलांचे नाव : मनोजकुमार फाकटकर",
    "relativeNameEnglish": "Father's Name: Manojkumar Phakatkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 214,
    "voterId": "SSO2207959",
    "fullNameMarathi": "निलम मनोज फाकटकर",
    "fullNameEnglish": "Nilam Manoj Phakatkar",
    "relativeNameMarathi": "पतीचे नाव : मनोज फाकटकर",
    "relativeNameEnglish": "Husband's Name: Manoj Phakatkar",
    "houseNoMarathi": "६८७",
    "houseNoEnglish": "687",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 215,
    "voterId": "SSO0229234",
    "fullNameMarathi": "कमल प्रल्हाद फाकटकर",
    "fullNameEnglish": "Kamal Pralhad Phakatkar",
    "relativeNameMarathi": "पतीचे नाव : प्रल्हाद फाकटकर",
    "relativeNameEnglish": "Husband's Name: Pralhad Phakatkar",
    "houseNoMarathi": "८०९",
    "houseNoEnglish": "809",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 216,
    "voterId": "KXH1080241",
    "fullNameMarathi": "मनोज प्रल्हाद फाकटकर",
    "fullNameEnglish": "Manoj Pralhad Phakatkar",
    "relativeNameMarathi": "वडिलांचे नाव : प्रल्हाद फाकटकर",
    "relativeNameEnglish": "Father's Name: Pralhad Phakatkar",
    "houseNoMarathi": "८०९",
    "houseNoEnglish": "809",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 217,
    "voterId": "KXH1079748",
    "fullNameMarathi": "विशाल प्रकाश कहाणे",
    "fullNameEnglish": "Vishal Prakash Kahane",
    "relativeNameMarathi": "वडिलांचे नाव : प्रकाश कहाणे",
    "relativeNameEnglish": "Father's Name: Prakash Kahane",
    "houseNoMarathi": "१०५२",
    "houseNoEnglish": "1052",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 218,
    "voterId": "SSO9350471",
    "fullNameMarathi": "राहुल नामदेव भूसेकर",
    "fullNameEnglish": "Rahul Namdev Bhuseakar",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव भूसेकर",
    "relativeNameEnglish": "Father's Name: Namdev Bhuseakar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 219,
    "voterId": "SSO9351032",
    "fullNameMarathi": "मानसी गणेश राऊत",
    "fullNameEnglish": "Manasi Ganesh Raut",
    "relativeNameMarathi": "वडिलांचे नाव : गणेश राऊत",
    "relativeNameEnglish": "Father's Name: Ganesh Raut",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 220,
    "voterId": "SSO9365123",
    "fullNameMarathi": "अक्षय भगवान साबळे",
    "fullNameEnglish": "Akshay Bhagwan Sable",
    "relativeNameMarathi": "आईचे नाव : अनिता साबळे",
    "relativeNameEnglish": "Mother's Name: Anita Sable",
    "houseNoMarathi": "३",
    "houseNoEnglish": "3",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 221,
    "voterId": "SSO9366303",
    "fullNameMarathi": "अर्चना गणेश तरडे",
    "fullNameEnglish": "Archana Ganesh Tarade",
    "relativeNameMarathi": "पतीचे नाव : गणेश तरडे",
    "relativeNameEnglish": "Husband's Name: Ganesh Tarade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 222,
    "voterId": "SSO9377789",
    "fullNameMarathi": "दिव्या अंकुश पोखरकर",
    "fullNameEnglish": "Divya Ankush Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : अंकुश पोखरकर",
    "relativeNameEnglish": "Father's Name: Ankush Pokharkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 21,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 223,
    "voterId": "SSO9387168",
    "fullNameMarathi": "निवेदिता सुभाष सुपेकर",
    "fullNameEnglish": "Nivedita Subhash Supekar",
    "relativeNameMarathi": "वडिलांचे नाव : सुभाष सुपेकर",
    "relativeNameEnglish": "Father's Name: Subhash Supekar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 224,
    "voterId": "SSO9387267",
    "fullNameMarathi": "दत्तात्रय बाळू सांडभोर",
    "fullNameEnglish": "Dattatray Balu Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : बाळू सांडभोर",
    "relativeNameEnglish": "Father's Name: Balu Sandbhor",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 225,
    "voterId": "SSO9387366",
    "fullNameMarathi": "कुणाल अंकुश पोखरकर",
    "fullNameEnglish": "Kunal Ankush Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : अंकुश पोखरकर",
    "relativeNameEnglish": "Father's Name: Ankush Pokharkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 226,
    "voterId": "SSO9388083",
    "fullNameMarathi": "तेजल सुभाष टाकळकर",
    "fullNameEnglish": "Tejal Subhash Takalkar",
    "relativeNameMarathi": "वडिलांचे नाव : सुभाष टाकळकर",
    "relativeNameEnglish": "Father's Name: Subhash Takalkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 227,
    "voterId": "SSO9391871",
    "fullNameMarathi": "प्रतीक गोरक्षनाथ कुरकुटे",
    "fullNameEnglish": "Pratik Gorakshanath Kurkute",
    "relativeNameMarathi": "वडिलांचे नाव : गोरक्षनाथ कुरकुटे",
    "relativeNameEnglish": "Father's Name: Gorakshanath Kurkute",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 228,
    "voterId": "SSO9392085",
    "fullNameMarathi": "डिंपल हर्षद सैंदाणे",
    "fullNameEnglish": "Dimple Harshad Saindane",
    "relativeNameMarathi": "पतीचे नाव : हर्षद रामदास सैंदाणे",
    "relativeNameEnglish": "Husband's Name: Harshad Ramdas Saindane",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 229,
    "voterId": "SSO9392119",
    "fullNameMarathi": "मधुरा सुभाष पाटील",
    "fullNameEnglish": "Madhura Subhash Patil",
    "relativeNameMarathi": "वडिलांचे नाव : सुभाष पाटील",
    "relativeNameEnglish": "Father's Name: Subhash Patil",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 230,
    "voterId": "SSO9392895",
    "fullNameMarathi": "मंजुषा तानाजी आंबेकर",
    "fullNameEnglish": "Manjusha Tanaji Ambekar",
    "relativeNameMarathi": "वडिलांचे नाव : तानाजी गुणाजी आंबेकर",
    "relativeNameEnglish": "Father's Name: Tanaji Gunaji Ambekar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 231,
    "voterId": "SSO9394776",
    "fullNameMarathi": "प्रतीक्षा निखिल फल्ले",
    "fullNameEnglish": "Pratishtha Nikhil Falle",
    "relativeNameMarathi": "पतीचे नाव : निखिल संजय फल्ले",
    "relativeNameEnglish": "Husband's Name: Nikhil Sanjay Falle",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 232,
    "voterId": "SSO9394909",
    "fullNameMarathi": "महेश तानाजी आंबेकर",
    "fullNameEnglish": "Mahesh Tanaji Ambekar",
    "relativeNameMarathi": "वडिलांचे नाव : तानाजी गुणाजी आंबेकर",
    "relativeNameEnglish": "Father's Name: Tanaji Gunaji Ambekar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 29,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 233,
    "voterId": "SSO9395930",
    "fullNameMarathi": "सुवर्णा गणेश देवडे",
    "fullNameEnglish": "Suvarna Ganesh Devde",
    "relativeNameMarathi": "पतीचे नाव : गणेश देवडे",
    "relativeNameEnglish": "Husband's Name: Ganesh Devde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 29,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 234,
    "voterId": "SSO9395963",
    "fullNameMarathi": "ओमकार सचिन कलढोणे",
    "fullNameEnglish": "Omkar Sachin Kaldhone",
    "relativeNameMarathi": "वडिलांचे नाव : सचिन कलढोणे",
    "relativeNameEnglish": "Father's Name: Sachin Kaldhone",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 235,
    "voterId": "SSO9396789",
    "fullNameMarathi": "जयेश कुंडलिक पाटोळे",
    "fullNameEnglish": "Jayesh Kundalik Patole",
    "relativeNameMarathi": "वडिलांचे नाव : कुंडलिक पाटोळे",
    "relativeNameEnglish": "Father's Name: Kundalik Patole",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 236,
    "voterId": "SSO1062665",
    "fullNameMarathi": "वंदना अंकुश केंगारे",
    "fullNameEnglish": "Vandana Ankush Kengare",
    "relativeNameMarathi": "पतीचे नाव : अंकुश केंगारे",
    "relativeNameEnglish": "Husband's Name: Ankush Kengare",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 237,
    "voterId": "SSO9417577",
    "fullNameMarathi": "संतोष पांडुरंग तनपुरे",
    "fullNameEnglish": "Santosh Pandurang Tanpure",
    "relativeNameMarathi": "वडिलांचे नाव : पांडुरंग तनपुरे",
    "relativeNameEnglish": "Father's Name: Pandurang Tanpure",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 46,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 238,
    "voterId": "SSO9417601",
    "fullNameMarathi": "कोमल पांडुरंग भोसकर",
    "fullNameEnglish": "Komal Pandurang Bhoskar",
    "relativeNameMarathi": "वडिलांचे नाव : पांडुरंग भोसकर",
    "relativeNameEnglish": "Father's Name: Pandurang Bhoskar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 239,
    "voterId": "SSO9419425",
    "fullNameMarathi": "मनीषा संतोष तनपुरे",
    "fullNameEnglish": "Manisha Santosh Tanpure",
    "relativeNameMarathi": "पतीचे नाव : संतोष तनपुरे",
    "relativeNameEnglish": "Husband's Name: Santosh Tanpure",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 240,
    "voterId": "SSO7333255",
    "fullNameMarathi": "रुपाली बालकृष्ण खुरपे",
    "fullNameEnglish": "Rupali Balkrishna Khurpe",
    "relativeNameMarathi": "पतीचे नाव : बालकृष्ण खुरपे",
    "relativeNameEnglish": "Husband's Name: Balkrishna Khurpe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 241,
    "voterId": "SSO9510975",
    "fullNameMarathi": "स्वरदा संतोष जोशी",
    "fullNameEnglish": "Swarda Santosh Joshi",
    "relativeNameMarathi": "वडिलांचे नाव : संतोष गणपत जोशी",
    "relativeNameEnglish": "Father's Name: Santosh Ganpat Joshi",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 18,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 242,
    "voterId": "SSO9578576",
    "fullNameMarathi": "हर्षदा सखाराम भोईर",
    "fullNameEnglish": "Harshada Sakharam Bhoir",
    "relativeNameMarathi": "वडिलांचे नाव : सखाराम धोंडीबा भोईर",
    "relativeNameEnglish": "Father's Name: Sakharam Dhonḍiba Bhoir",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 243,
    "voterId": "SSO9578592",
    "fullNameMarathi": "भरत ओगडराम चौधरी",
    "fullNameEnglish": "Bharat Ogadram Chaudhari",
    "relativeNameMarathi": "वडिलांचे नाव : अशोक मारुती चौधरी",
    "relativeNameEnglish": "Father's Name: Ashok Maruti Chaudhari",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 244,
    "voterId": "SSO9578972",
    "fullNameMarathi": "सुधीर त्रिभुवन नेहेरे",
    "fullNameEnglish": "Sudhir Tribhuvan Nehere",
    "relativeNameMarathi": "वडिलांचे नाव : त्रिभुवन नेहेरे",
    "relativeNameEnglish": "Father's Name: Tribhuvan Nehere",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 21,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 245,
    "voterId": "SSO9591793",
    "fullNameMarathi": "आशा जितेंद्र शिंदे",
    "fullNameEnglish": "Asha Jitendra Shinde",
    "relativeNameMarathi": "पतीचे नाव : जितेंद्र शिंदे",
    "relativeNameEnglish": "Husband's Name: Jitendra Shinde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 246,
    "voterId": "SSO9020033",
    "fullNameMarathi": "कोमल प्रवीण टाकळकर",
    "fullNameEnglish": "Komal Pravin Takalkar",
    "relativeNameMarathi": "पतीचे नाव : प्रवीण टाकळकर",
    "relativeNameEnglish": "Husband's Name: Pravin Takalkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 247,
    "voterId": "SSO1765312",
    "fullNameMarathi": "नसिम इब्राहिम मोमीन",
    "fullNameEnglish": "Nasim Ibrahim Momin",
    "relativeNameMarathi": "पतीचे नाव : इब्राहिम मोमीन",
    "relativeNameEnglish": "Husband's Name: Ibrahim Momin",
    "houseNoMarathi": "२१३०",
    "houseNoEnglish": "2130",
    "roomNo": "1",
    "age": 69,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 248,
    "voterId": "SSO1107936",
    "fullNameMarathi": "तैसीन इब्राहिम मोमीन",
    "fullNameEnglish": "Taisin Ibrahim Momin",
    "relativeNameMarathi": "वडिलांचे नाव : इब्राहिम मोमीन",
    "relativeNameEnglish": "Father's Name: Ibrahim Momin",
    "houseNoMarathi": "२१३०",
    "houseNoEnglish": "2130",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 249,
    "voterId": "SSO1108045",
    "fullNameMarathi": "रुखसाना तैसीन मोमीन",
    "fullNameEnglish": "Rukhsana Taisin Momin",
    "relativeNameMarathi": "पतीचे नाव : तैसीन मोमीन",
    "relativeNameEnglish": "Husband's Name: Taisin Momin",
    "houseNoMarathi": "२१३०",
    "houseNoEnglish": "2130",
    "roomNo": "1",
    "age": 54,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 250,
    "voterId": "SSO1108181",
    "fullNameMarathi": "विशाल विजय कासवा",
    "fullNameEnglish": "Vishal Vijay Kasawa",
    "relativeNameMarathi": "वडिलांचे नाव : विजय कासवा",
    "relativeNameEnglish": "Father's Name: Vijay Kasawa",
    "houseNoMarathi": "३९८",
    "houseNoEnglish": "398",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 251,
    "voterId": "SSO1521814",
    "fullNameMarathi": "विजय हरकचंद कासवा",
    "fullNameEnglish": "Vijay Harkachand Kasawa",
    "relativeNameMarathi": "वडिलांचे नाव : हरकचंद कासवा",
    "relativeNameEnglish": "Father's Name: Harkachand Kasawa",
    "houseNoMarathi": "३९८",
    "houseNoEnglish": "398",
    "roomNo": "1",
    "age": 67,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 252,
    "voterId": "SSO8418246",
    "fullNameMarathi": "छाया विजय कासवा",
    "fullNameEnglish": "Chhaya Vijay Kasawa",
    "relativeNameMarathi": "पतीचे नाव : विजय कासवा",
    "relativeNameEnglish": "Husband's Name: Vijay Kasawa",
    "houseNoMarathi": "३९८",
    "houseNoEnglish": "398",
    "roomNo": "1",
    "age": 65,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 253,
    "voterId": "SSO1522010",
    "fullNameMarathi": "वैभव खंडोपंत कर्वे",
    "fullNameEnglish": "Vaibhav Khandopant Karve",
    "relativeNameMarathi": "वडिलांचे नाव : खंडोपंत कर्वे",
    "relativeNameEnglish": "Father's Name: Khandopant Karve",
    "houseNoMarathi": "११३/६",
    "houseNoEnglish": "113/6",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 254,
    "voterId": "SSO1314023",
    "fullNameMarathi": "निलेश शंकर कुंभार",
    "fullNameEnglish": "Nilesh Shankar Kumbhar",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर कुंभार",
    "relativeNameEnglish": "Father's Name: Shankar Kumbhar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 255,
    "voterId": "SSO7842099",
    "fullNameMarathi": "विकास पोपट खैरे",
    "fullNameEnglish": "Vikas Popat Khaire",
    "relativeNameMarathi": "वडिलांचे नाव : पोपट खैरे",
    "relativeNameEnglish": "Father's Name: Popat Khaire",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 256,
    "voterId": "SSO7842107",
    "fullNameMarathi": "रेखा विकास खैरे",
    "fullNameEnglish": "Rekha Vikas Khaire",
    "relativeNameMarathi": "पतीचे नाव : विकास खैरे",
    "relativeNameEnglish": "Husband's Name: Vikas Khaire",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 257,
    "voterId": "SSO8189110",
    "fullNameMarathi": "इवेता विजय भुजबळ",
    "fullNameEnglish": "Iweta Vijay Bhujbal",
    "relativeNameMarathi": "वडिलांचे नाव : विजय भुजबळ",
    "relativeNameEnglish": "Father's Name: Vijay Bhujbal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 258,
    "voterId": "SSO8374381",
    "fullNameMarathi": "अपर्णा राहुल तानपुरे",
    "fullNameEnglish": "Aparna Rahul Tanpure",
    "relativeNameMarathi": "पतीचे नाव : राहुल तानपुरे",
    "relativeNameEnglish": "Husband's Name: Rahul Tanpure",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 259,
    "voterId": "SSO1522143",
    "fullNameMarathi": "निलेश जयप्रकाश शिवळे",
    "fullNameEnglish": "Nilesh Jayprakash Shivle",
    "relativeNameMarathi": "वडिलांचे नाव : जयप्रकाश शिवळे",
    "relativeNameEnglish": "Father's Name: Jayprakash Shivle",
    "houseNoMarathi": "११८",
    "houseNoEnglish": "118",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 260,
    "voterId": "SSO7513724",
    "fullNameMarathi": "शकुंतला सोपान घुमटकर",
    "fullNameEnglish": "Shakuntala Sopan Ghumatkar",
    "relativeNameMarathi": "पतीचे नाव : सोपान घुमटकर",
    "relativeNameEnglish": "Husband's Name: Sopan Ghumatkar",
    "houseNoMarathi": "११७८",
    "houseNoEnglish": "1178",
    "roomNo": "1",
    "age": 77,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 261,
    "voterId": "SSO1323281",
    "fullNameMarathi": "नवनाथ कुंडलीक पवळे",
    "fullNameEnglish": "Navnath Kundalik Pavale",
    "relativeNameMarathi": "वडिलांचे नाव : कुंडलीक पवळे",
    "relativeNameEnglish": "Father's Name: Kundalik Pavale",
    "houseNoMarathi": "११९०",
    "houseNoEnglish": "1190",
    "roomNo": "1",
    "age": 54,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 262,
    "voterId": "SSO1323256",
    "fullNameMarathi": "भुमिता नवनाथ पवळे",
    "fullNameEnglish": "Bhumita Navnath Pavale",
    "relativeNameMarathi": "पतीचे नाव : नवनाथ पवळे",
    "relativeNameEnglish": "Husband's Name: Navnath Pavale",
    "houseNoMarathi": "११९०",
    "houseNoEnglish": "1190",
    "roomNo": "1",
    "age": 50,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 263,
    "voterId": "SSO1522291",
    "fullNameMarathi": "वसंत प्रकाश शिवळे",
    "fullNameEnglish": "Vasant Prakash Shivle",
    "relativeNameMarathi": "वडिलांचे नाव : प्रकाश शिवळे",
    "relativeNameEnglish": "Father's Name: Prakash Shivle",
    "houseNoMarathi": "१२०७",
    "houseNoEnglish": "1207",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 264,
    "voterId": "SSO2208445",
    "fullNameMarathi": "रामभाऊ शिवराम जाधव",
    "fullNameEnglish": "Rambhau Shivram Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : शिवराम जाधव",
    "relativeNameEnglish": "Father's Name: Shivram Jadhav",
    "houseNoMarathi": "५३०",
    "houseNoEnglish": "530",
    "roomNo": "1",
    "age": 87,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 265,
    "voterId": "SSO1107489",
    "fullNameMarathi": "बंडु भिमाजी कर्वे",
    "fullNameEnglish": "Bandu Bhimaji Karve",
    "relativeNameMarathi": "वडिलांचे नाव : भिमाजी कर्वे",
    "relativeNameEnglish": "Father's Name: Bhimaji Karve",
    "houseNoMarathi": "११३/६",
    "houseNoEnglish": "113/6",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 266,
    "voterId": "SSO1108782",
    "fullNameMarathi": "सुजाता बंडु कर्वे",
    "fullNameEnglish": "Sujata Bandu Karve",
    "relativeNameMarathi": "पतीचे नाव : बंडु कर्वे",
    "relativeNameEnglish": "Husband's Name: Bandu Karve",
    "houseNoMarathi": "११३/६",
    "houseNoEnglish": "113/6",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 267,
    "voterId": "SSO1108323",
    "fullNameMarathi": "दत्तात्रय तुकाराम घुले",
    "fullNameEnglish": "Dattatray Tukaram Ghule",
    "relativeNameMarathi": "वडिलांचे नाव : तुकाराम घुले",
    "relativeNameEnglish": "Father's Name: Tukaram Ghule",
    "houseNoMarathi": "५४३/१",
    "houseNoEnglish": "543/1",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 268,
    "voterId": "SSO1108333",
    "fullNameMarathi": "दर्शना दत्तात्रय घुले",
    "fullNameEnglish": "Darshana Dattatray Ghule",
    "relativeNameMarathi": "पतीचे नाव : दत्तात्रय घुले",
    "relativeNameEnglish": "Husband's Name: Dattatray Ghule",
    "houseNoMarathi": "५४३/१",
    "houseNoEnglish": "543/1",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 269,
    "voterId": "SSO8258246",
    "fullNameMarathi": "समरीन इस्माइल शाह",
    "fullNameEnglish": "Samrin Ismail Shah",
    "relativeNameMarathi": "पतीचे नाव : इस्माइल शाह",
    "relativeNameEnglish": "Husband's Name: Ismail Shah",
    "houseNoMarathi": "९९५",
    "houseNoEnglish": "995",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 270,
    "voterId": "SSO7378060",
    "fullNameMarathi": "भाग्यश्री रामलाल गुजराती",
    "fullNameEnglish": "Bhagyshree Ramlal Gujarati",
    "relativeNameMarathi": "वडिलांचे नाव : रामलाल गुजराती",
    "relativeNameEnglish": "Father's Name: Ramlal Gujarati",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 271,
    "voterId": "SSO8941122",
    "fullNameMarathi": "तानाजी सूर्यवंशी",
    "fullNameEnglish": "Tanaji Suryavanshi",
    "relativeNameMarathi": "वडिलांचे नाव : रावसाहेब सूर्यवंशी",
    "relativeNameEnglish": "Father's Name: Rausaheb Suryavanshi",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 272,
    "voterId": "SSO7265515",
    "fullNameMarathi": "अनिता वासुदेव हेडा",
    "fullNameEnglish": "Anita Vasudev Heda",
    "relativeNameMarathi": "पतीचे नाव : वासुदेव हेडा",
    "relativeNameEnglish": "Husband's Name: Vasudev Heda",
    "houseNoMarathi": "११९६",
    "houseNoEnglish": "1196",
    "roomNo": "1",
    "age": 39,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 273,
    "voterId": "SSO7604499",
    "fullNameMarathi": "सुप्रिया स्वप्निल लहांगे",
    "fullNameEnglish": "Supriya Swapnil Lahange",
    "relativeNameMarathi": "पतीचे नाव : स्वप्निल लहांगे",
    "relativeNameEnglish": "Husband's Name: Swapnil Lahange",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 34,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 274,
    "voterId": "SSO7761729",
    "fullNameMarathi": "प्रतिभा निलेश रजाने",
    "fullNameEnglish": "Pratibha Nilesh Rajane",
    "relativeNameMarathi": "पतीचे नाव : निलेश रजाने",
    "relativeNameEnglish": "Husband's Name: Nilesh Rajane",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 275,
    "voterId": "SSO7761802",
    "fullNameMarathi": "निलेश सुरेश रजाने",
    "fullNameEnglish": "Nilesh Suresh Rajane",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश रजाने",
    "relativeNameEnglish": "Father's Name: Suresh Rajane",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 276,
    "voterId": "SSO7761794",
    "fullNameMarathi": "गौरव दिलीपराव सांडभोर",
    "fullNameEnglish": "Gaurav Diliprao Sandbhor",
    "relativeNameMarathi": "वडिलांचे नाव : दिलीपराव सांडभोर",
    "relativeNameEnglish": "Father's Name: Diliprao Sandbhor",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 277,
    "voterId": "SSO1108815",
    "fullNameMarathi": "सुनिता महादेव घुले",
    "fullNameEnglish": "Sunita Mahadev Ghule",
    "relativeNameMarathi": "पतीचे नाव : महादेव घुले",
    "relativeNameEnglish": "Husband's Name: Mahadev Ghule",
    "houseNoMarathi": "१०६२",
    "houseNoEnglish": "1062",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 278,
    "voterId": "SSO1108797",
    "fullNameMarathi": "सिद्धार्थ मरिबा चव्हाण",
    "fullNameEnglish": "Siddharth Mariba Chavan",
    "relativeNameMarathi": "वडिलांचे नाव : मरिबा चव्हाण",
    "relativeNameEnglish": "Father's Name: Mariba Chavan",
    "houseNoMarathi": "१२८९",
    "houseNoEnglish": "1289",
    "roomNo": "1",
    "age": 70,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 279,
    "voterId": "SSO1107312",
    "fullNameMarathi": "माधवी राजेश सोनी",
    "fullNameEnglish": "Madhavi Rajesh Sonī",
    "relativeNameMarathi": "पतीचे नाव : राजेश सोनी",
    "relativeNameEnglish": "Husband's Name: Rajesh Sonī",
    "houseNoMarathi": "१३८९",
    "houseNoEnglish": "1389",
    "roomNo": "1",
    "age": 44,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 280,
    "voterId": "SSO1108823",
    "fullNameMarathi": "स्मिता सिद्धार्थ चव्हाण",
    "fullNameEnglish": "Smita Siddharth Chavan",
    "relativeNameMarathi": "पतीचे नाव : सिद्धार्थ चव्हाण",
    "relativeNameEnglish": "Husband's Name: Siddharth Chavan",
    "houseNoMarathi": "१२८९",
    "houseNoEnglish": "1289",
    "roomNo": "1",
    "age": 65,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 281,
    "voterId": "SSO1107316",
    "fullNameMarathi": "राजेश दामोदर सोनी",
    "fullNameEnglish": "Rajesh Damodar Sonī",
    "relativeNameMarathi": "वडिलांचे नाव : दामोदर सोनी",
    "relativeNameEnglish": "Father's Name: Damodar Sonī",
    "houseNoMarathi": "१२८९",
    "houseNoEnglish": "1289",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 282,
    "voterId": "SSO1108819",
    "fullNameMarathi": "कृष्णकांत सिद्धार्थ चव्हाण",
    "fullNameEnglish": "Krishnakant Siddharth Chavan",
    "relativeNameMarathi": "वडिलांचे नाव : सिद्धार्थ चव्हाण",
    "relativeNameEnglish": "Father's Name: Siddharth Chavan",
    "houseNoMarathi": "१२८९",
    "houseNoEnglish": "1289",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 283,
    "voterId": "SSO7265572",
    "fullNameMarathi": "वासुदेव ओमप्रकाश हेडा",
    "fullNameEnglish": "Vasudev Om Prakash Heda",
    "relativeNameMarathi": "वडिलांचे नाव : ओमप्रकाश हेडा",
    "relativeNameEnglish": "Father's Name: Om Prakash Heda",
    "houseNoMarathi": "११९६",
    "houseNoEnglish": "1196",
    "roomNo": "1",
    "age": 44,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 284,
    "voterId": "SSO7265523",
    "fullNameMarathi": "उमा कौशलेश हेडा",
    "fullNameEnglish": "Uma Kaushalesh Heda",
    "relativeNameMarathi": "पतीचे नाव : कौशलेश हेडा",
    "relativeNameEnglish": "Husband's Name: Kaushalesh Heda",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 285,
    "voterId": "SSO8943722",
    "fullNameMarathi": "नगीन सूर्यवंशी",
    "fullNameEnglish": "Nagin Suryavanshi",
    "relativeNameMarathi": "वडिलांचे नाव : तानाजी सूर्यवंशी",
    "relativeNameEnglish": "Father's Name: Tanaji Suryavanshi",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 286,
    "voterId": "SSO8895260",
    "fullNameMarathi": "अभिषेक बोर्हाडे",
    "fullNameEnglish": "Abhishek Borhade",
    "relativeNameMarathi": "वडिलांचे नाव : विभीषण बोर्हाडे",
    "relativeNameEnglish": "Father's Name: Vibhishan Borhade",
    "houseNoMarathi": "१२४",
    "houseNoEnglish": "124",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 287,
    "voterId": "SSO8895302",
    "fullNameMarathi": "वैभव बोर्हाडे",
    "fullNameEnglish": "Vaibhav Borhade",
    "relativeNameMarathi": "वडिलांचे नाव : विभीषण बोर्हाडे",
    "relativeNameEnglish": "Father's Name: Vibhishan Borhade",
    "houseNoMarathi": "४६५",
    "houseNoEnglish": "465",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 288,
    "voterId": "SSO7762271",
    "fullNameMarathi": "सम्राट किशोर कर्नावट",
    "fullNameEnglish": "Samrat Kishor Karnavat",
    "relativeNameMarathi": "वडिलांचे नाव : किशोर कर्नावट",
    "relativeNameEnglish": "Father's Name: Kishor Karnavat",
    "houseNoMarathi": "११९६",
    "houseNoEnglish": "1196",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 289,
    "voterId": "SSO8126690",
    "fullNameMarathi": "रैमा रमेश तळपे",
    "fullNameEnglish": "Raima Ramesh Talape",
    "relativeNameMarathi": "आईचे नाव : जिजा तळपे",
    "relativeNameEnglish": "Mother's Name: Jija Talape",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 290,
    "voterId": "SSO7761950",
    "fullNameMarathi": "संगीता अनिल थिगळे",
    "fullNameEnglish": "Sangeeta Anil Thigale",
    "relativeNameMarathi": "पतीचे नाव : अनिल थिगळे",
    "relativeNameEnglish": "Husband's Name: Anil Thigale",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 46,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 291,
    "voterId": "SSO7842479",
    "fullNameMarathi": "अविनाश नामदेव जाधव",
    "fullNameEnglish": "Avinash Namdev Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव जाधव",
    "relativeNameEnglish": "Father's Name: Namdev Jadhav",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 292,
    "voterId": "SSO8372971",
    "fullNameMarathi": "रूपाली जाधव",
    "fullNameEnglish": "Rupali Jadhav",
    "relativeNameMarathi": "पतीचे नाव : राहुल जाधव",
    "relativeNameEnglish": "Husband's Name: Rahul Jadhav",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 293,
    "voterId": "SSO7378037",
    "fullNameMarathi": "गणेश सुनिल करपे",
    "fullNameEnglish": "Ganesh Sunil Karpe",
    "relativeNameMarathi": "वडिलांचे नाव : सुनिल करपे",
    "relativeNameEnglish": "Father's Name: Sunil Karpe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 294,
    "voterId": "SSO8373474",
    "fullNameMarathi": "सुषमा तरंगे",
    "fullNameEnglish": "Sushma Tarnage",
    "relativeNameMarathi": "पतीचे नाव : विद्यावान तरंगे",
    "relativeNameEnglish": "Husband's Name: Vidyavan Tarnage",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 295,
    "voterId": "SSO7842461",
    "fullNameMarathi": "सुनिता अविनाश जाधव",
    "fullNameEnglish": "Sunita Avinash Jadhav",
    "relativeNameMarathi": "पतीचे नाव : अविनाश जाधव",
    "relativeNameEnglish": "Husband's Name: Avinash Jadhav",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 50,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 296,
    "voterId": "SSO7267321",
    "fullNameMarathi": "अमर मूळचंद्र राटीया",
    "fullNameEnglish": "Amar Mulchandra Ratia",
    "relativeNameMarathi": "वडिलांचे नाव : मूळचंद्र राटीया",
    "relativeNameEnglish": "Father's Name: Mulchandra Ratia",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 297,
    "voterId": "SSO7514813",
    "fullNameMarathi": "अमृता आप्पासाहेब शिंदे",
    "fullNameEnglish": "Amruta Appasaheb Shinde",
    "relativeNameMarathi": "पतीचे नाव : आप्पासाहेब शिंदे",
    "relativeNameEnglish": "Husband's Name: Appasaheb Shinde",
    "houseNoMarathi": "९५१",
    "houseNoEnglish": "951",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 298,
    "voterId": "SSO7514821",
    "fullNameMarathi": "सुधीर नामदेव पोखरकर",
    "fullNameEnglish": "Sudhir Namdev Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव पोखरकर",
    "relativeNameEnglish": "Father's Name: Namdev Pokharkar",
    "houseNoMarathi": "१२७९३",
    "houseNoEnglish": "12793",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 299,
    "voterId": "SSO9209834",
    "fullNameMarathi": "अश्विनी लक्ष्मण नाईकडे",
    "fullNameEnglish": "Ashwini Laxman Naikade",
    "relativeNameMarathi": "वडिलांचे नाव : लक्ष्मण नाईकडे",
    "relativeNameEnglish": "Father's Name: Laxman Naikade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 300,
    "voterId": "SSO9260886",
    "fullNameMarathi": "विजय गोविंदराव वायाळ",
    "fullNameEnglish": "Vijay Govindrao Wayal",
    "relativeNameMarathi": "वडिलांचे नाव : गोविंदराव रामभाऊ वायाळ",
    "relativeNameEnglish": "Father's Name: Govindrao Rambhau Wayal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 301,
    "voterId": "SSO9260936",
    "fullNameMarathi": "कीर्ती विजय वायाळ",
    "fullNameEnglish": "Kirti Vijay Wayal",
    "relativeNameMarathi": "पतीचे नाव : विजय गोविंदराव वायाळ",
    "relativeNameEnglish": "Husband's Name: Vijay Govindrao Wayal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 302,
    "voterId": "SSO9328345",
    "fullNameMarathi": "सई निलेश कहाणे",
    "fullNameEnglish": "Sai Nilesh Kahane",
    "relativeNameMarathi": "वडिलांचे नाव : निलेश कहाणे",
    "relativeNameEnglish": "Father's Name: Nilesh Kahane",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 19,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 303,
    "voterId": "SSO7604655",
    "fullNameMarathi": "प्रिया विजय दाभाडे",
    "fullNameEnglish": "Priya Vijay Dabhade",
    "relativeNameMarathi": "पतीचे नाव : विजय दाभाडे",
    "relativeNameEnglish": "Husband's Name: Vijay Dabhade",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 304,
    "voterId": "SSO7842537",
    "fullNameMarathi": "ओमकार विलास काजळे",
    "fullNameEnglish": "Omkar Vilas Kajale",
    "relativeNameMarathi": "वडिलांचे नाव : विलास काजळे",
    "relativeNameEnglish": "Father's Name: Vilas Kajale",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 305,
    "voterId": "SSO7842511",
    "fullNameMarathi": "कमलेश सुरेश टाटीया",
    "fullNameEnglish": "Kamalesh Suresh Tatia",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश टाटीया",
    "relativeNameEnglish": "Father's Name: Suresh Tatia",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 306,
    "voterId": "SSO8286668",
    "fullNameMarathi": "सेजल संतोष बलदोटा",
    "fullNameEnglish": "Sejal Santosh Baldota",
    "relativeNameMarathi": "वडिलांचे नाव : संतोष बलदोटा",
    "relativeNameEnglish": "Father's Name: Santosh Baldota",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 307,
    "voterId": "SSO8258964",
    "fullNameMarathi": "आसावरी इंद्रनाथ भोसले",
    "fullNameEnglish": "Asawari Indranath Bhosale",
    "relativeNameMarathi": "वडिलांचे नाव : इंद्रनाथ भोसले",
    "relativeNameEnglish": "Father's Name: Indranath Bhosale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 308,
    "voterId": "SSO8098824",
    "fullNameMarathi": "तेजस चंद्रशेखर जाधव",
    "fullNameEnglish": "Tejas Chandrashekhar Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : चंद्रशेखर जाधव",
    "relativeNameEnglish": "Father's Name: Chandrashekhar Jadhav",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 309,
    "voterId": "SSO8011272",
    "fullNameMarathi": "प्रसाद महेश रासकर",
    "fullNameEnglish": "Prasad Mahesh Raskar",
    "relativeNameMarathi": "वडिलांचे नाव : महेश रासकर",
    "relativeNameEnglish": "Father's Name: Mahesh Raskar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 310,
    "voterId": "SSO8011173",
    "fullNameMarathi": "सुप्रिया प्रशांत बोराटे",
    "fullNameEnglish": "Supriya Prashant Borate",
    "relativeNameMarathi": "पतीचे नाव : प्रशांत बोराटे",
    "relativeNameEnglish": "Husband's Name: Prashant Borate",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 311,
    "voterId": "SSO7762776",
    "fullNameMarathi": "काशिनाथ विठोबा पाटोळे",
    "fullNameEnglish": "Kashinath Vithoba Patole",
    "relativeNameMarathi": "वडिलांचे नाव : विठोबा पाटोळे",
    "relativeNameEnglish": "Father's Name: Vithoba Patole",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 85,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 312,
    "voterId": "SSO9002783",
    "fullNameMarathi": "शुभदा राक्षे",
    "fullNameEnglish": "Shubhada Rakshe",
    "relativeNameMarathi": "पतीचे नाव : अमित राक्षे",
    "relativeNameEnglish": "Husband's Name: Amit Rakshe",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 313,
    "voterId": "SSO4640199",
    "fullNameMarathi": "सराजउद्दीन अजीज अन्सारी",
    "fullNameEnglish": "Sarajuddin Ajiz Ansari",
    "relativeNameMarathi": "वडिलांचे नाव : अजीज अन्सारी",
    "relativeNameEnglish": "Father's Name: Ajiz Ansari",
    "houseNoMarathi": "११०९",
    "houseNoEnglish": "1109",
    "roomNo": "1",
    "age": 48,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 314,
    "voterId": "SSO4640207",
    "fullNameMarathi": "कुरशीद सदाद्दीन अन्सारी",
    "fullNameEnglish": "Kurshid Sadauddin Ansari",
    "relativeNameMarathi": "वडिलांचे नाव : सदाद्दीन अन्सारी",
    "relativeNameEnglish": "Father's Name: Sadauddin Ansari",
    "houseNoMarathi": "११०९",
    "houseNoEnglish": "1109",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 315,
    "voterId": "SSO4640173",
    "fullNameMarathi": "आलमद्दीन रज्जाक अन्सारी",
    "fullNameEnglish": "Alammadin Razzak Ansari",
    "relativeNameMarathi": "वडिलांचे नाव : रज्जाक अन्सारी",
    "relativeNameEnglish": "Father's Name: Razzak Ansari",
    "houseNoMarathi": "११०९",
    "houseNoEnglish": "1109",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 316,
    "voterId": "SSO4640181",
    "fullNameMarathi": "मोफीदा सराऊद्दीन अन्सारी",
    "fullNameEnglish": "Mofida Sarauddin Ansari",
    "relativeNameMarathi": "पतीचे नाव : सराऊद्दीन अन्सारी",
    "relativeNameEnglish": "Husband's Name: Sarauddin Ansari",
    "houseNoMarathi": "११०९",
    "houseNoEnglish": "1109",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 317,
    "voterId": "SSO4640348",
    "fullNameMarathi": "दिप्ती शामकांत राक्षे",
    "fullNameEnglish": "Dipti Shamkant Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : शामकांत राक्षे",
    "relativeNameEnglish": "Father's Name: Shamkant Rakshe",
    "houseNoMarathi": "१७५३",
    "houseNoEnglish": "1753",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 318,
    "voterId": "SSO4640454",
    "fullNameMarathi": "सीमा अशोक राक्षे",
    "fullNameEnglish": "Seema Ashok Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : अशोक राक्षे",
    "relativeNameEnglish": "Father's Name: Ashok Rakshe",
    "houseNoMarathi": "१९३२",
    "houseNoEnglish": "1932",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 319,
    "voterId": "SSO4640587",
    "fullNameMarathi": "मंजू तुकाराम भालेकर",
    "fullNameEnglish": "Manju Tukaram Bhallekar",
    "relativeNameMarathi": "पतीचे नाव : तुकाराम भालेकर",
    "relativeNameEnglish": "Husband's Name: Tukaram Bhallekar",
    "houseNoMarathi": "१९८०",
    "houseNoEnglish": "1980",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 320,
    "voterId": "SSO7515885",
    "fullNameMarathi": "नेहा अरुण सोनवणे",
    "fullNameEnglish": "Neha Arun Sonavane",
    "relativeNameMarathi": "वडिलांचे नाव : अरुण सोनवणे",
    "relativeNameEnglish": "Father's Name: Arun Sonavane",
    "houseNoMarathi": "१९८१",
    "houseNoEnglish": "1981",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 321,
    "voterId": "SSO1107766",
    "fullNameMarathi": "शरीफ इबादुल्ला शाह",
    "fullNameEnglish": "Sharif Ibadulla Shah",
    "relativeNameMarathi": "वडिलांचे नाव : इबादुल्ला शाह",
    "relativeNameEnglish": "Father's Name: Ibadulla Shah",
    "houseNoMarathi": "११७८७४",
    "houseNoEnglish": "117874",
    "roomNo": "1",
    "age": 84,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 322,
    "voterId": "SSO1107767",
    "fullNameMarathi": "जयबुन्नीसा शरीफ शाह",
    "fullNameEnglish": "Jaibunnisa Sharif Shah",
    "relativeNameMarathi": "पतीचे नाव : शरीफ शाह",
    "relativeNameEnglish": "Husband's Name: Sharif Shah",
    "houseNoMarathi": "११७८७४",
    "houseNoEnglish": "117874",
    "roomNo": "1",
    "age": 77,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 323,
    "voterId": "SSO1107622",
    "fullNameMarathi": "लतीफ शरीफ शाह",
    "fullNameEnglish": "Latif Sharif Shah",
    "relativeNameMarathi": "वडिलांचे नाव : शरीफ शाह",
    "relativeNameEnglish": "Father's Name: Sharif Shah",
    "houseNoMarathi": "११७८०४",
    "houseNoEnglish": "117804",
    "roomNo": "1",
    "age": 49,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 324,
    "voterId": "SSO1619618",
    "fullNameMarathi": "नझीया अंजुम शरीफ शाह",
    "fullNameEnglish": "Naziya Anjum Sharif Shah",
    "relativeNameMarathi": "पतीचे नाव : शरीफ शाह",
    "relativeNameEnglish": "Husband's Name: Sharif Shah",
    "houseNoMarathi": "११७८०४",
    "houseNoEnglish": "117804",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 325,
    "voterId": "SSO1107710",
    "fullNameMarathi": "विठ्ठल संभाजी डफळ",
    "fullNameEnglish": "Viththal Sambhaji Dafal",
    "relativeNameMarathi": "वडिलांचे नाव : संभाजी डफळ",
    "relativeNameEnglish": "Father's Name: Sambhaji Dafal",
    "houseNoMarathi": "११८३७",
    "houseNoEnglish": "11837",
    "roomNo": "1",
    "age": 71,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 326,
    "voterId": "SSO1107711",
    "fullNameMarathi": "शकुंतला विठ्ठल डफळ",
    "fullNameEnglish": "Shakuntala Viththal Dafal",
    "relativeNameMarathi": "पतीचे नाव : विठ्ठल डफळ",
    "relativeNameEnglish": "Husband's Name: Viththal Dafal",
    "houseNoMarathi": "११८३७",
    "houseNoEnglish": "11837",
    "roomNo": "1",
    "age": 66,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 327,
    "voterId": "SSO1465509",
    "fullNameMarathi": "संदीप विठ्ठल डफळ",
    "fullNameEnglish": "Sandip Viththal Dafal",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल डफळ",
    "relativeNameEnglish": "Father's Name: Viththal Dafal",
    "houseNoMarathi": "११८३७",
    "houseNoEnglish": "11837",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 328,
    "voterId": "SSO4640272",
    "fullNameMarathi": "स्वाती विठ्ठल डफळ",
    "fullNameEnglish": "Swati Viththal Dafal",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल डफळ",
    "relativeNameEnglish": "Father's Name: Viththal Dafal",
    "houseNoMarathi": "११८८७",
    "houseNoEnglish": "11887",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 329,
    "voterId": "SSO4640280",
    "fullNameMarathi": "शीतल विठ्ठल डफळ",
    "fullNameEnglish": "Shital Viththal Dafal",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल डफळ",
    "relativeNameEnglish": "Father's Name: Viththal Dafal",
    "houseNoMarathi": "११८८७",
    "houseNoEnglish": "11887",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 330,
    "voterId": "SSO1107581",
    "fullNameMarathi": "चारुशिला अरुण जाधव",
    "fullNameEnglish": "Charushila Arun Jadhav",
    "relativeNameMarathi": "पतीचे नाव : अरुण जाधव",
    "relativeNameEnglish": "Husband's Name: Arun Jadhav",
    "houseNoMarathi": "११९७८",
    "houseNoEnglish": "11978",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 331,
    "voterId": "SSO1107775",
    "fullNameMarathi": "जयप्रकाश नारायण शिवळे",
    "fullNameEnglish": "Jayprakash Narayan Shivle",
    "relativeNameMarathi": "वडिलांचे नाव : नारायण शिवळे",
    "relativeNameEnglish": "Father's Name: Narayan Shivle",
    "houseNoMarathi": "१२०७",
    "houseNoEnglish": "1207",
    "roomNo": "1",
    "age": 81,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 332,
    "voterId": "SSO1107604",
    "fullNameMarathi": "आशा जयप्रकाश शिवळे",
    "fullNameEnglish": "Asha Jayprakash Shivle",
    "relativeNameMarathi": "पतीचे नाव : जयप्रकाश शिवळे",
    "relativeNameEnglish": "Husband's Name: Jayprakash Shivle",
    "houseNoMarathi": "१२०७",
    "houseNoEnglish": "1207",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 333,
    "voterId": "SSO8099020",
    "fullNameMarathi": "कोमल निवृत्ती इष्टे",
    "fullNameEnglish": "Komal Nivruttī Ishte",
    "relativeNameMarathi": "वडिलांचे नाव : निवृत्ती इष्टे",
    "relativeNameEnglish": "Father's Name: Nivruttī Ishte",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 334,
    "voterId": "SSO1107687",
    "fullNameMarathi": "लक्ष्मण महादू गिलबिले",
    "fullNameEnglish": "Laxman Mahadu Gilbile",
    "relativeNameMarathi": "वडिलांचे नाव : महादू गिलबिले",
    "relativeNameEnglish": "Father's Name: Mahadu Gilbile",
    "houseNoMarathi": "११९७",
    "houseNoEnglish": "1197",
    "roomNo": "1",
    "age": 69,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 335,
    "voterId": "SSO1107693",
    "fullNameMarathi": "शकुंतला लक्ष्मण गिलबिले",
    "fullNameEnglish": "Shakuntala Laxman Gilbile",
    "relativeNameMarathi": "पतीचे नाव : लक्ष्मण गिलबिले",
    "relativeNameEnglish": "Husband's Name: Laxman Gilbile",
    "houseNoMarathi": "११९७",
    "houseNoEnglish": "1197",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 336,
    "voterId": "SSO1107507",
    "fullNameMarathi": "राजेंद्र लक्ष्मण गिलबिले",
    "fullNameEnglish": "Rajendra Laxman Gilbile",
    "relativeNameMarathi": "वडिलांचे नाव : लक्ष्मण गिलबिले",
    "relativeNameEnglish": "Father's Name: Laxman Gilbile",
    "houseNoMarathi": "११९७",
    "houseNoEnglish": "1197",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 337,
    "voterId": "SSO1108551",
    "fullNameMarathi": "नवनाथ लक्ष्मण गिलबिले",
    "fullNameEnglish": "Navnath Laxman Gilbile",
    "relativeNameMarathi": "वडिलांचे नाव : लक्ष्मण गिलबिले",
    "relativeNameEnglish": "Father's Name: Laxman Gilbile",
    "houseNoMarathi": "११९७",
    "houseNoEnglish": "1197",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 338,
    "voterId": "SSO8011298",
    "fullNameMarathi": "अतुल मारुती टाकळकर",
    "fullNameEnglish": "Atul Maruti Takalkar",
    "relativeNameMarathi": "वडिलांचे नाव : मारुती टाकळकर",
    "relativeNameEnglish": "Father's Name: Maruti Takalkar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 339,
    "voterId": "SSO8011306",
    "fullNameMarathi": "रुपाली अतुल टाकळकर",
    "fullNameEnglish": "Rupali Atul Takalkar",
    "relativeNameMarathi": "पतीचे नाव : अतुल टाकळकर",
    "relativeNameEnglish": "Husband's Name: Atul Takalkar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 340,
    "voterId": "SSO8399297",
    "fullNameMarathi": "मंदा जयवंत",
    "fullNameEnglish": "Manda Jaywant",
    "relativeNameMarathi": "पतीचे नाव : तांबे जयवंत",
    "relativeNameEnglish": "Husband's Name: Tambe Jaywant",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 341,
    "voterId": "SSO4636858",
    "fullNameMarathi": "माधुरी शामकांत राक्षे",
    "fullNameEnglish": "Madhuri Shamkant Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : शामकांत राक्षे",
    "relativeNameEnglish": "Father's Name: Shamkant Rakshe",
    "houseNoMarathi": "१२११",
    "houseNoEnglish": "1211",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 342,
    "voterId": "SSO9613928",
    "fullNameMarathi": "प्राजक्ता शुभम कहाणे",
    "fullNameEnglish": "Prajakta Shubham Kahane",
    "relativeNameMarathi": "पतीचे नाव : शुभम संजय कहाणे",
    "relativeNameEnglish": "Husband's Name: Shubham Sanjay Kahane",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 343,
    "voterId": "SSO7604788",
    "fullNameMarathi": "बबन सखाराम लाडके",
    "fullNameEnglish": "Baban Sakharam Ladke",
    "relativeNameMarathi": "वडिलांचे नाव : सखाराम लाडके",
    "relativeNameEnglish": "Father's Name: Sakharam Ladke",
    "houseNoMarathi": "११९४",
    "houseNoEnglish": "1194",
    "roomNo": "1",
    "age": 81,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 344,
    "voterId": "SSO7604796",
    "fullNameMarathi": "हिराबाई बबन लाडके",
    "fullNameEnglish": "Hirabai Baban Ladke",
    "relativeNameMarathi": "पतीचे नाव : बबन लाडके",
    "relativeNameEnglish": "Husband's Name: Baban Ladke",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 72,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 345,
    "voterId": "SSO7604812",
    "fullNameMarathi": "राजेश बबन लाडके",
    "fullNameEnglish": "Rajesh Baban Ladke",
    "relativeNameMarathi": "वडिलांचे नाव : बबन लाडके",
    "relativeNameEnglish": "Father's Name: Baban Ladke",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 346,
    "voterId": "SSO8099210",
    "fullNameMarathi": "पूजा वसंत लोंढे",
    "fullNameEnglish": "Puja Vasant Londhe",
    "relativeNameMarathi": "वडिलांचे नाव : वसंत लोंढे",
    "relativeNameEnglish": "Father's Name: Vasant Londhe",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 347,
    "voterId": "SSO8939266",
    "fullNameMarathi": "सायली आरडे",
    "fullNameEnglish": "Sayali Arade",
    "relativeNameMarathi": "पतीचे नाव : बृजेश आरडे",
    "relativeNameEnglish": "Husband's Name: Brijesh Arade",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 348,
    "voterId": "SSO8891244",
    "fullNameMarathi": "बघूबाई बागड",
    "fullNameEnglish": "Bhagubai Bagad",
    "relativeNameMarathi": "पतीचे नाव : दादाभाऊ बागड",
    "relativeNameEnglish": "Husband's Name: Dadabhau Bagad",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 79,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 349,
    "voterId": "SSO8848152",
    "fullNameMarathi": "मनीषा अरूडे",
    "fullNameEnglish": "Manisha Arude",
    "relativeNameMarathi": "पतीचे नाव : प्रकाश अरूडे",
    "relativeNameEnglish": "Husband's Name: Prakash Arude",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 350,
    "voterId": "SSO8310468",
    "fullNameMarathi": "दत्तु औटी",
    "fullNameEnglish": "Dattu Auti",
    "relativeNameMarathi": "वडिलांचे नाव : गणपत औटी",
    "relativeNameEnglish": "Father's Name: Ganpat Auti",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 60,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 351,
    "voterId": "SSO8313017",
    "fullNameMarathi": "मंदा औटी",
    "fullNameEnglish": "Manda Auti",
    "relativeNameMarathi": "पतीचे नाव : दत्तू औटी",
    "relativeNameEnglish": "Husband's Name: Dattu Auti",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 352,
    "voterId": "SSO8853897",
    "fullNameMarathi": "सुमित भोर",
    "fullNameEnglish": "Sumit Bhor",
    "relativeNameMarathi": "वडिलांचे नाव : सोपान भोर",
    "relativeNameEnglish": "Father's Name: Sopan Bhor",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 353,
    "voterId": "SSO8848103",
    "fullNameMarathi": "अनिल दाते",
    "fullNameEnglish": "Anil Date",
    "relativeNameMarathi": "वडिलांचे नाव : दत्तात्रय दाते",
    "relativeNameEnglish": "Father's Name: Dattatray Date",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 354,
    "voterId": "SSO8848111",
    "fullNameMarathi": "निधी नायकरे",
    "fullNameEnglish": "Nidhi Naykare",
    "relativeNameMarathi": "पतीचे नाव : पुरुषोत्तम नायकरे",
    "relativeNameEnglish": "Husband's Name: Purushottam Naykare",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 355,
    "voterId": "SSO8312993",
    "fullNameMarathi": "निर्मला सदरे",
    "fullNameEnglish": "Nirmala Sadre",
    "relativeNameMarathi": "पतीचे नाव : बबन सदरे",
    "relativeNameEnglish": "Husband's Name: Baban Sadre",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 61,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 356,
    "voterId": "SSO8310492",
    "fullNameMarathi": "सुकन्या संद्धोर",
    "fullNameEnglish": "Sukanya Sandhor",
    "relativeNameMarathi": "पतीचे नाव : नितेश संद्धोर",
    "relativeNameEnglish": "Husband's Name: Nitesh Sandhor",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 357,
    "voterId": "SSO8949042",
    "fullNameMarathi": "भूषण सर्न्डे",
    "fullNameEnglish": "Bhushan Saronde",
    "relativeNameMarathi": "वडिलांचे नाव : श्रीराम सर्न्डे",
    "relativeNameEnglish": "Father's Name: Shriram Saronde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 358,
    "voterId": "SSO8313033",
    "fullNameMarathi": "नीलम शिंदे",
    "fullNameEnglish": "Nilam Shinde",
    "relativeNameMarathi": "पतीचे नाव : प्रकाश शिंदे",
    "relativeNameEnglish": "Husband's Name: Prakash Shinde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 359,
    "voterId": "SSO8313033",
    "fullNameMarathi": "सोनिया तातिया",
    "fullNameEnglish": "Sonia Tatia",
    "relativeNameMarathi": "वडिलांचे नाव : राजेंद्र तातिया",
    "relativeNameEnglish": "Father's Name: Rajendra Tatia",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 360,
    "voterId": "SSO8949042",
    "fullNameMarathi": "पूजा बागड",
    "fullNameEnglish": "Puja Bagad",
    "relativeNameMarathi": "वडिलांचे नाव : कृष्णा बागड",
    "relativeNameEnglish": "Father's Name: Krishna Bagad",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 27,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 361,
    "voterId": "SSO8854127",
    "fullNameMarathi": "वर्षा एरंडे",
    "fullNameEnglish": "Varsha Aerande",
    "relativeNameMarathi": "पतीचे नाव : भूषण एरंडे",
    "relativeNameEnglish": "Husband's Name: Bhushan Aerande",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 362,
    "voterId": "SSO8904583",
    "fullNameMarathi": "शरद गवंदे",
    "fullNameEnglish": "Sharad Gavande",
    "relativeNameMarathi": "वडिलांचे नाव : भरत गवंदे",
    "relativeNameEnglish": "Father's Name: Bharat Gavande",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 363,
    "voterId": "SSO8853798",
    "fullNameMarathi": "कावेरी गोसावी",
    "fullNameEnglish": "Kaveri Gosavi",
    "relativeNameMarathi": "पतीचे नाव : स्वप्नील गोसावी",
    "relativeNameEnglish": "Husband's Name: Swapnil Gosavi",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 364,
    "voterId": "SSO8891384",
    "fullNameMarathi": "राजू मैड",
    "fullNameEnglish": "Raju Maide",
    "relativeNameMarathi": "वडिलांचे नाव : सुरेश मैड",
    "relativeNameEnglish": "Father's Name: Suresh Maide",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 365,
    "voterId": "SSO8891350",
    "fullNameMarathi": "स्मिता मैड",
    "fullNameEnglish": "Smita Maide",
    "relativeNameMarathi": "पतीचे नाव : राजू मैड",
    "relativeNameEnglish": "Husband's Name: Raju Maide",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 366,
    "voterId": "SSO8855199",
    "fullNameMarathi": "विमल सदरे",
    "fullNameEnglish": "Vimal Sadre",
    "relativeNameMarathi": "पतीचे नाव : बबन सदरे",
    "relativeNameEnglish": "Husband's Name: Baban Sadre",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 83,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 367,
    "voterId": "SSO8853806",
    "fullNameMarathi": "सौरभ सदरे",
    "fullNameEnglish": "Saurabh Sadre",
    "relativeNameMarathi": "वडिलांचे नाव : गणेश सदरे",
    "relativeNameEnglish": "Father's Name: Ganesh Sadre",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 368,
    "voterId": "SSO8855454",
    "fullNameMarathi": "गणेश शेटे",
    "fullNameEnglish": "Ganesh Shete",
    "relativeNameMarathi": "वडिलांचे नाव : तुकाराम शेटे",
    "relativeNameEnglish": "Father's Name: Tukaram Shete",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 369,
    "voterId": "SSO8377830",
    "fullNameMarathi": "शुभम लडकत",
    "fullNameEnglish": "Shubham Ladkat",
    "relativeNameMarathi": "वडिलांचे नाव : विष्णू लडकत",
    "relativeNameEnglish": "Father's Name: Vishnu Ladkat",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 25,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 370,
    "voterId": "SSO8260713",
    "fullNameMarathi": "चंदा भाऊराव कुंभारे",
    "fullNameEnglish": "Chanda Bhaaurao Kumbhare",
    "relativeNameMarathi": "पतीचे नाव : भाऊराव कुंभारे",
    "relativeNameEnglish": "Husband's Name: Bhaaurao Kumbhare",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 371,
    "voterId": "SSO8261844",
    "fullNameMarathi": "इवेता विजय क्षीरसागर",
    "fullNameEnglish": "Iweta Vijay Kshirsagar",
    "relativeNameMarathi": "पतीचे नाव : विजय क्षीरसागर",
    "relativeNameEnglish": "Husband's Name: Vijay Kshirsagar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 372,
    "voterId": "SSO7516461",
    "fullNameMarathi": "प्रकाश गणपत राक्षे",
    "fullNameEnglish": "Prakash Ganpat Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : गणपत राक्षे",
    "relativeNameEnglish": "Father's Name: Ganpat Rakshe",
    "houseNoMarathi": "१०७",
    "houseNoEnglish": "107",
    "roomNo": "1",
    "age": 74,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 373,
    "voterId": "SSO7516479",
    "fullNameMarathi": "आशा प्रकाश राक्षे",
    "fullNameEnglish": "Asha Prakash Rakshe",
    "relativeNameMarathi": "पतीचे नाव : प्रकाश राक्षे",
    "relativeNameEnglish": "Husband's Name: Prakash Rakshe",
    "houseNoMarathi": "१०४",
    "houseNoEnglish": "104",
    "roomNo": "1",
    "age": 67,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 374,
    "voterId": "SSO1523281",
    "fullNameMarathi": "आप्पासाहेब प्रकाश राक्षे",
    "fullNameEnglish": "Appasaheb Prakash Rakshe",
    "relativeNameMarathi": "वडिलांचे नाव : आप्पासाहेब राक्षे",
    "relativeNameEnglish": "Father's Name: Appasaheb Rakshe",
    "houseNoMarathi": "१०५",
    "houseNoEnglish": "105",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 375,
    "voterId": "SSO1620020",
    "fullNameMarathi": "नंदकुमार म्हतारबा तळपे",
    "fullNameEnglish": "Nandkumar Mhatarba Talape",
    "relativeNameMarathi": "वडिलांचे नाव : म्हतारबा तळपे",
    "relativeNameEnglish": "Father's Name: Mhatarba Talape",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 59,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 376,
    "voterId": "SSO1620038",
    "fullNameMarathi": "चंद्रिका नंदकुमार तळपे",
    "fullNameEnglish": "Chandrika Nandkumar Talape",
    "relativeNameMarathi": "पतीचे नाव : नंदकुमार तळपे",
    "relativeNameEnglish": "Husband's Name: Nandkumar Talape",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 56,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 377,
    "voterId": "SSO7150543",
    "fullNameMarathi": "कुंदन तळपे",
    "fullNameEnglish": "Kundan Talape",
    "relativeNameMarathi": "वडिलांचे नाव : नंदकुमार तळपे",
    "relativeNameEnglish": "Father's Name: Nandkumar Talape",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 378,
    "voterId": "SSO8952574",
    "fullNameMarathi": "आदित्य तळपे",
    "fullNameEnglish": "Aditya Talape",
    "relativeNameMarathi": "वडिलांचे नाव : नंदकुमार तळपे",
    "relativeNameEnglish": "Father's Name: Nandkumar Talape",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 20,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 379,
    "voterId": "SSO2401727",
    "fullNameMarathi": "किरन विठ्ठल पावडे",
    "fullNameEnglish": "Kiran Viththal Pawade",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल पावडे",
    "relativeNameEnglish": "Father's Name: Viththal Pawade",
    "houseNoMarathi": "२६",
    "houseNoEnglish": "26",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 380,
    "voterId": "SSO1323606",
    "fullNameMarathi": "वर्षा योगेश शिंदे",
    "fullNameEnglish": "Varsha Yogesh Shinde",
    "relativeNameMarathi": "पतीचे नाव : योगेश शिंदे",
    "relativeNameEnglish": "Husband's Name: Yogesh Shinde",
    "houseNoMarathi": "१००७",
    "houseNoEnglish": "1007",
    "roomNo": "1",
    "age": 42,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 381,
    "voterId": "SSO1296576",
    "fullNameMarathi": "निलम अर्जुन शिंगे",
    "fullNameEnglish": "Nilam Arjun Shinge",
    "relativeNameMarathi": "पतीचे नाव : अर्जुन शिंगे",
    "relativeNameEnglish": "Husband's Name: Arjun Shinge",
    "houseNoMarathi": "१२१०",
    "houseNoEnglish": "1210",
    "roomNo": "1",
    "age": 55,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 382,
    "voterId": "SSO1296002",
    "fullNameMarathi": "भिमाशंकर अर्जुन शिंगे",
    "fullNameEnglish": "Bhimashankar Arjun Shinge",
    "relativeNameMarathi": "वडिलांचे नाव : अर्जुन शिंगे",
    "relativeNameEnglish": "Father's Name: Arjun Shinge",
    "houseNoMarathi": "१२१०",
    "houseNoEnglish": "1210",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 383,
    "voterId": "SSO1523430",
    "fullNameMarathi": "शंकर विठ्ठल शेळके",
    "fullNameEnglish": "Shankar Viththal Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल शेळके",
    "relativeNameEnglish": "Father's Name: Viththal Shelke",
    "houseNoMarathi": "१२८७७",
    "houseNoEnglish": "12877",
    "roomNo": "1",
    "age": 54,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 384,
    "voterId": "SSO8439614",
    "fullNameMarathi": "कांचन खुशालचंद लुणावत",
    "fullNameEnglish": "Kanchan Khushalchand Lunavat",
    "relativeNameMarathi": "पतीचे नाव : खुशालचंद लुणावत",
    "relativeNameEnglish": "Husband's Name: Khushalchand Lunavat",
    "houseNoMarathi": "१३००८",
    "houseNoEnglish": "13008",
    "roomNo": "1",
    "age": 91,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 385,
    "voterId": "SSO8439622",
    "fullNameMarathi": "अजित खुशालचंद लुणावत",
    "fullNameEnglish": "Ajit Khushalchand Lunavat",
    "relativeNameMarathi": "वडिलांचे नाव : खुशालचंद लुणावत",
    "relativeNameEnglish": "Father's Name: Khushalchand Lunavat",
    "houseNoMarathi": "१३००८",
    "houseNoEnglish": "13008",
    "roomNo": "1",
    "age": 62,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 386,
    "voterId": "SSO8439630",
    "fullNameMarathi": "कांता अजित लुणावत",
    "fullNameEnglish": "Kanta Ajit Lunavat",
    "relativeNameMarathi": "पतीचे नाव : अजित लुणावत",
    "relativeNameEnglish": "Husband's Name: Ajit Lunavat",
    "houseNoMarathi": "१३००८",
    "houseNoEnglish": "13008",
    "roomNo": "1",
    "age": 58,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 387,
    "voterId": "SSO2092385",
    "fullNameMarathi": "सुधीर नामदेव पोखरकर",
    "fullNameEnglish": "Sudhir Namdev Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव पोखरकर",
    "relativeNameEnglish": "Father's Name: Namdev Pokharkar",
    "houseNoMarathi": "१३९३",
    "houseNoEnglish": "1393",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 388,
    "voterId": "SSO1296555",
    "fullNameMarathi": "निरज रमेश परदेशी",
    "fullNameEnglish": "Niraj Ramesh Pardeshi",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश परदेशी",
    "relativeNameEnglish": "Father's Name: Ramesh Pardeshi",
    "houseNoMarathi": "१९०९",
    "houseNoEnglish": "1909",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 389,
    "voterId": "SSO1296554",
    "fullNameMarathi": "शुभांगी रमेश परदेशी",
    "fullNameEnglish": "Shubhangi Ramesh Pardeshi",
    "relativeNameMarathi": "पतीचे नाव : रमेश परदेशी",
    "relativeNameEnglish": "Husband's Name: Ramesh Pardeshi",
    "houseNoMarathi": "१९०९",
    "houseNoEnglish": "1909",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 390,
    "voterId": "SSO2091502",
    "fullNameMarathi": "इंदुमती वसंत मेहता",
    "fullNameEnglish": "Indumati Vasant Mehta",
    "relativeNameMarathi": "पतीचे नाव : वसंत मेहता",
    "relativeNameEnglish": "Husband's Name: Vasant Mehta",
    "houseNoMarathi": "१९२५७",
    "houseNoEnglish": "19257",
    "roomNo": "1",
    "age": 80,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 391,
    "voterId": "SSO1523521",
    "fullNameMarathi": "स्वप्ना वसंत मेहता",
    "fullNameEnglish": "Swapna Vasant Mehta",
    "relativeNameMarathi": "पतीचे नाव : वसंत मेहता",
    "relativeNameEnglish": "Husband's Name: Vasant Mehta",
    "houseNoMarathi": "१९२५७",
    "houseNoEnglish": "19257",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 392,
    "voterId": "SSO7517006",
    "fullNameMarathi": "प्रदिप बद्रिनारायण सारडा",
    "fullNameEnglish": "Pradip Badrinarayan Sarada",
    "relativeNameMarathi": "वडिलांचे नाव : बद्रिनारायण सारडा",
    "relativeNameEnglish": "Father's Name: Badrinarayan Sarada",
    "houseNoMarathi": "१९२५०",
    "houseNoEnglish": "19250",
    "roomNo": "1",
    "age": 63,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 393,
    "voterId": "SSO1775972",
    "fullNameMarathi": "जयश्री प्रदिप सारडा",
    "fullNameEnglish": "Jayashri Pradip Sarada",
    "relativeNameMarathi": "पतीचे नाव : प्रदिप सारडा",
    "relativeNameEnglish": "Husband's Name: Pradip Sarada",
    "houseNoMarathi": "१९२५७",
    "houseNoEnglish": "19257",
    "roomNo": "1",
    "age": 54,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 394,
    "voterId": "SSO1523547",
    "fullNameMarathi": "मयुर वसंत लोंढे",
    "fullNameEnglish": "Mayur Vasant Londhe",
    "relativeNameMarathi": "वडिलांचे नाव : वसंत लोंढे",
    "relativeNameEnglish": "Father's Name: Vasant Londhe",
    "houseNoMarathi": "१९३४",
    "houseNoEnglish": "1934",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 395,
    "voterId": "SSO2091379",
    "fullNameMarathi": "संदीप बन्सिलाल शमोळे",
    "fullNameEnglish": "Sandip Bansilal Shamole",
    "relativeNameMarathi": "वडिलांचे नाव : बन्सिलाल शमोळे",
    "relativeNameEnglish": "Father's Name: Bansilal Shamole",
    "houseNoMarathi": "२२८/१",
    "houseNoEnglish": "228/1",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 396,
    "voterId": "SSO1619840",
    "fullNameMarathi": "रोहिणी सुनिल भुजबळ",
    "fullNameEnglish": "Rohini Sunil Bhujbal",
    "relativeNameMarathi": "पतीचे नाव : सुनिल भुजबळ",
    "relativeNameEnglish": "Husband's Name: Sunil Bhujbal",
    "houseNoMarathi": "७६७८",
    "houseNoEnglish": "7678",
    "roomNo": "1",
    "age": 37,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 397,
    "voterId": "SSO1523547",
    "fullNameMarathi": "सागर रामचंद्र कळमकर",
    "fullNameEnglish": "Sagar Ramchandra Kalmakar",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र कळमकर",
    "relativeNameEnglish": "Father's Name: Ramchandra Kalmakar",
    "houseNoMarathi": "७६७८",
    "houseNoEnglish": "7678",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 398,
    "voterId": "SSO2091379",
    "fullNameMarathi": "राहुल सोपान नाईकरे",
    "fullNameEnglish": "Rahul Sopan Naikare",
    "relativeNameMarathi": "वडिलांचे नाव : सोपान नाईकरे",
    "relativeNameEnglish": "Father's Name: Sopan Naikare",
    "houseNoMarathi": "९५९/९६",
    "houseNoEnglish": "959/96",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 399,
    "voterId": "SSO1619840",
    "fullNameMarathi": "रविकांत सोपान नाईकरे",
    "fullNameEnglish": "Ravikant Sopan Naikare",
    "relativeNameMarathi": "वडिलांचे नाव : सोपान नाईकरे",
    "relativeNameEnglish": "Father's Name: Sopan Naikare",
    "houseNoMarathi": "९५९/९६",
    "houseNoEnglish": "959/96",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 400,
    "voterId": "SSO7516875",
    "fullNameMarathi": "साहेबराव शंकर शेळके",
    "fullNameEnglish": "Sahebrao Shankar Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर शेळके",
    "relativeNameEnglish": "Father's Name: Shankar Shelke",
    "houseNoMarathi": "१३९१४५",
    "houseNoEnglish": "139145",
    "roomNo": "1",
    "age": 90,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 401,
    "voterId": "SSO7516883",
    "fullNameMarathi": "नामदेव बळंवत पोखरकर",
    "fullNameEnglish": "Namdev Balavant Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : बळंवत पोखरकर",
    "relativeNameEnglish": "Father's Name: Balavant Pokharkar",
    "houseNoMarathi": "१३९३/९",
    "houseNoEnglish": "1393/9",
    "roomNo": "1",
    "age": 64,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 402,
    "voterId": "SSO7516891",
    "fullNameMarathi": "मंदा नामदेव पोखरकर",
    "fullNameEnglish": "Manda Namdev Pokharkar",
    "relativeNameMarathi": "पतीचे नाव : नामदेव पोखरकर",
    "relativeNameEnglish": "Husband's Name: Namdev Pokharkar",
    "houseNoMarathi": "१३९३/९",
    "houseNoEnglish": "1393/9",
    "roomNo": "1",
    "age": 58,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 403,
    "voterId": "SSO1523448",
    "fullNameMarathi": "नंदु नामदेव पोखरकर",
    "fullNameEnglish": "Nandu Namdev Pokharkar",
    "relativeNameMarathi": "वडिलांचे नाव : नामदेव पोखरकर",
    "relativeNameEnglish": "Father's Name: Namdev Pokharkar",
    "houseNoMarathi": "१३९३/९",
    "houseNoEnglish": "1393/9",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 404,
    "voterId": "SSO7150485",
    "fullNameMarathi": "नंदा राजेंद्र गोसावी",
    "fullNameEnglish": "Nanda Rajendra Gosavi",
    "relativeNameMarathi": "पतीचे नाव : राजेंद्र गोसावी",
    "relativeNameEnglish": "Husband's Name: Rajendra Gosavi",
    "houseNoMarathi": "१८७०/४",
    "houseNoEnglish": "1870/4",
    "roomNo": "1",
    "age": 52,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 405,
    "voterId": "SSO1891621",
    "fullNameMarathi": "प्रकाश मच्छिंद्र शिंदे",
    "fullNameEnglish": "Prakash Machhindra Shinde",
    "relativeNameMarathi": "वडिलांचे नाव : मच्छिंद्र शिंदे",
    "relativeNameEnglish": "Father's Name: Machhindra Shinde",
    "houseNoMarathi": "९५९/१००",
    "houseNoEnglish": "959/100",
    "roomNo": "1",
    "age": 39,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 406,
    "voterId": "SSO1296589",
    "fullNameMarathi": "मंजुदेवी हनुमान जांगिड",
    "fullNameEnglish": "Manjudevi Hanuman Jangid",
    "relativeNameMarathi": "पतीचे नाव : हनुमान जांगिड",
    "relativeNameEnglish": "Husband's Name: Hanuman Jangid",
    "houseNoMarathi": "१३०००१३",
    "houseNoEnglish": "1300013",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 407,
    "voterId": "SSO8891186",
    "fullNameMarathi": "कोमल शेळके",
    "fullNameEnglish": "Komal Shelke",
    "relativeNameMarathi": "पतीचे नाव : अक्षय शेळके",
    "relativeNameEnglish": "Husband's Name: Akshay Shelke",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 408,
    "voterId": "SSO8891152",
    "fullNameMarathi": "ललिता शिंदे",
    "fullNameEnglish": "Lalita Shinde",
    "relativeNameMarathi": "पतीचे नाव : सुहास शिंदे",
    "relativeNameEnglish": "Husband's Name: Suhas Shinde",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 24,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 409,
    "voterId": "SSO2091528",
    "fullNameMarathi": "लता धोंडीबा जगदाळे",
    "fullNameEnglish": "Lata Dhonḍiba Jagdale",
    "relativeNameMarathi": "वडिलांचे नाव : धोंडीबा जगदाळे",
    "relativeNameEnglish": "Father's Name: Dhonḍiba Jagdale",
    "houseNoMarathi": "५७",
    "houseNoEnglish": "57",
    "roomNo": "1",
    "age": 58,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 410,
    "voterId": "SSO8099327",
    "fullNameMarathi": "अनिकेत रमेश सुतार",
    "fullNameEnglish": "Aniket Ramesh Sutar",
    "relativeNameMarathi": "वडिलांचे नाव : रमेश सुतार",
    "relativeNameEnglish": "Father's Name: Ramesh Sutar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 411,
    "voterId": "SSO7763170",
    "fullNameMarathi": "माधव सखाराम बहिरम",
    "fullNameEnglish": "Madhav Sakharam Bahiram",
    "relativeNameMarathi": "वडिलांचे नाव : सखाराम बहिरम",
    "relativeNameEnglish": "Father's Name: Sakharam Bahiram",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 412,
    "voterId": "SSO7763188",
    "fullNameMarathi": "निर्मला माधव बहिरम",
    "fullNameEnglish": "Nirmala Madhav Bahiram",
    "relativeNameMarathi": "पतीचे नाव : माधव बहिरम",
    "relativeNameEnglish": "Husband's Name: Madhav Bahiram",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 40,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 413,
    "voterId": "SSO7763154",
    "fullNameMarathi": "प्रमिला सचिन जाधव",
    "fullNameEnglish": "Pramila Sachin Jadhav",
    "relativeNameMarathi": "पतीचे नाव : सचिन जाधव",
    "relativeNameEnglish": "Husband's Name: Sachin Jadhav",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 35,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 414,
    "voterId": "SSO7695067",
    "fullNameMarathi": "तेजस हरिश्चंद्र जाधव",
    "fullNameEnglish": "Tejas Harishchandra Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : हरिश्चंद्र जाधव",
    "relativeNameEnglish": "Father's Name: Harishchandra Jadhav",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 415,
    "voterId": "SSO7763113",
    "fullNameMarathi": "नंदा गिरीश नाईकडे",
    "fullNameEnglish": "Nanda Girish Naikade",
    "relativeNameMarathi": "पतीचे नाव : गिरीश नाईकडे",
    "relativeNameEnglish": "Husband's Name: Girish Naikade",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 45,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 416,
    "voterId": "SSO7763220",
    "fullNameMarathi": "मायावती पांडुरंग शिंदे",
    "fullNameEnglish": "Mayavati Pandurang Shinde",
    "relativeNameMarathi": "पतीचे नाव : पांडुरंग शिंदे",
    "relativeNameEnglish": "Husband's Name: Pandurang Shinde",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 75,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 417,
    "voterId": "SSO8880726",
    "fullNameMarathi": "अक्षय शेळके",
    "fullNameEnglish": "Akshay Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : अनिल शेळके",
    "relativeNameEnglish": "Father's Name: Anil Shelke",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 418,
    "voterId": "SSO1108405",
    "fullNameMarathi": "विठोबा श्रीपती टिजगे",
    "fullNameEnglish": "Vithoba Shripati Tijage",
    "relativeNameMarathi": "वडिलांचे नाव : श्रीपती टिजगे",
    "relativeNameEnglish": "Father's Name: Shripati Tijage",
    "houseNoMarathi": "९१",
    "houseNoEnglish": "91",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 419,
    "voterId": "SSO1108821",
    "fullNameMarathi": "सुरेखा विठोबा टिजगे",
    "fullNameEnglish": "Surekha Vithoba Tijage",
    "relativeNameMarathi": "पतीचे नाव : विठोबा टिजगे",
    "relativeNameEnglish": "Husband's Name: Vithoba Tijage",
    "houseNoMarathi": "९१",
    "houseNoEnglish": "91",
    "roomNo": "1",
    "age": 47,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 420,
    "voterId": "SSO1296603",
    "fullNameMarathi": "शंकर मल्हारी गायकवाड",
    "fullNameEnglish": "Shankar Malhari Gayakwad",
    "relativeNameMarathi": "वडिलांचे नाव : मल्हारी गायकवाड",
    "relativeNameEnglish": "Father's Name: Malhari Gayakwad",
    "houseNoMarathi": "१३९०",
    "houseNoEnglish": "1390",
    "roomNo": "1",
    "age": 72,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 421,
    "voterId": "SSO7150592",
    "fullNameMarathi": "दिनकर मल्हारी गायकवाड",
    "fullNameEnglish": "Dinkar Malhari Gayakwad",
    "relativeNameMarathi": "वडिलांचे नाव : मल्हारी गायकवाड",
    "relativeNameEnglish": "Father's Name: Malhari Gayakwad",
    "houseNoMarathi": "१३९०",
    "houseNoEnglish": "1390",
    "roomNo": "1",
    "age": 61,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 422,
    "voterId": "SSO7150600",
    "fullNameMarathi": "छाया दिनकर गायकवाड",
    "fullNameEnglish": "Chhaya Dinkar Gayakwad",
    "relativeNameMarathi": "पतीचे नाव : दिनकर गायकवाड",
    "relativeNameEnglish": "Husband's Name: Dinkar Gayakwad",
    "houseNoMarathi": "१३९०",
    "houseNoEnglish": "1390",
    "roomNo": "1",
    "age": 53,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 423,
    "voterId": "SSO1296603",
    "fullNameMarathi": "मंजूश्री सागर गायकवाड",
    "fullNameEnglish": "Manjushree Sagar Gayakwad",
    "relativeNameMarathi": "पतीचे नाव : सागर गायकवाड",
    "relativeNameEnglish": "Husband's Name: Sagar Gayakwad",
    "houseNoMarathi": "१३९०",
    "houseNoEnglish": "1390",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 424,
    "voterId": "SSO2209310",
    "fullNameMarathi": "सागर शंकर गायकवाड",
    "fullNameEnglish": "Sagar Shankar Gayakwad",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर गायकवाड",
    "relativeNameEnglish": "Father's Name: Shankar Gayakwad",
    "houseNoMarathi": "१६९०",
    "houseNoEnglish": "1690",
    "roomNo": "1",
    "age": 43,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 425,
    "voterId": "SSO7150584",
    "fullNameMarathi": "महेश शंकर गायकवाड",
    "fullNameEnglish": "Mahesh Shankar Gayakwad",
    "relativeNameMarathi": "वडिलांचे नाव : शंकर गायकवाड",
    "relativeNameEnglish": "Father's Name: Shankar Gayakwad",
    "houseNoMarathi": "१६९०",
    "houseNoEnglish": "1690",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 426,
    "voterId": "SSO2092435",
    "fullNameMarathi": "अश्विनी विठ्ठल शिर्के",
    "fullNameEnglish": "Ashwini Viththal Shirke",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल शिर्के",
    "relativeNameEnglish": "Father's Name: Viththal Shirke",
    "houseNoMarathi": "१८७०",
    "houseNoEnglish": "1870",
    "roomNo": "1",
    "age": 36,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 427,
    "voterId": "SSO2209740",
    "fullNameMarathi": "गणेश विठ्ठल शिर्के",
    "fullNameEnglish": "Ganesh Viththal Shirke",
    "relativeNameMarathi": "वडिलांचे नाव : विठ्ठल शिर्के",
    "relativeNameEnglish": "Father's Name: Viththal Shirke",
    "houseNoMarathi": "१८७०",
    "houseNoEnglish": "1870",
    "roomNo": "1",
    "age": 32,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 428,
    "voterId": "SSO2092443",
    "fullNameMarathi": "सुभाष अर्जुन शेळके",
    "fullNameEnglish": "Subhash Arjun Shelke",
    "relativeNameMarathi": "वडिलांचे नाव : अर्जुन शेळके",
    "relativeNameEnglish": "Father's Name: Arjun Shelke",
    "houseNoMarathi": "१८७१",
    "houseNoEnglish": "1871",
    "roomNo": "1",
    "age": 80,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 429,
    "voterId": "SSO2092450",
    "fullNameMarathi": "भागुबाई सुभाष शेळके",
    "fullNameEnglish": "Bhagubai Subhash Shelke",
    "relativeNameMarathi": "पतीचे नाव : सुभाष शेळके",
    "relativeNameEnglish": "Husband's Name: Subhash Shelke",
    "houseNoMarathi": "१८७१",
    "houseNoEnglish": "1871",
    "roomNo": "1",
    "age": 79,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 430,
    "voterId": "SSO7265937",
    "fullNameMarathi": "सुप्रिया प्रभाकर जाधव",
    "fullNameEnglish": "Supriya Prabhakar Jadhav",
    "relativeNameMarathi": "वडिलांचे नाव : प्रभाकर जाधव",
    "relativeNameEnglish": "Father's Name: Prabhakar Jadhav",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 431,
    "voterId": "SSO8011348",
    "fullNameMarathi": "नूतन ज्ञानेश्वर जाधव",
    "fullNameEnglish": "Nutan Gyaneshwar Jadhav",
    "relativeNameMarathi": "पतीचे नाव : ज्ञानेश्वर जाधव",
    "relativeNameEnglish": "Husband's Name: Gyaneshwar Jadhav",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 432,
    "voterId": "SSO7265895",
    "fullNameMarathi": "प्रतीक्षा परबती जमदाडे",
    "fullNameEnglish": "Pratishtha Parbati Jamdade",
    "relativeNameMarathi": "वडिलांचे नाव : परबती जमदाडे",
    "relativeNameEnglish": "Father's Name: Parbati Jamdade",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 31,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 433,
    "voterId": "SSO8099343",
    "fullNameMarathi": "प्रज्ञा ज्ञानेश्वर कडलग",
    "fullNameEnglish": "Pragnya Gyaneshwar Kadlag",
    "relativeNameMarathi": "वडिलांचे नाव : ज्ञानेश्वर कडलग",
    "relativeNameEnglish": "Father's Name: Gyaneshwar Kadlag",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 434,
    "voterId": "SSO7842925",
    "fullNameMarathi": "गणेश रामचंद्र निकम",
    "fullNameEnglish": "Ganesh Ramchandra Nikam",
    "relativeNameMarathi": "वडिलांचे नाव : रामचंद्र निकम",
    "relativeNameEnglish": "Father's Name: Ramchandra Nikam",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 41,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 435,
    "voterId": "SSO7265853",
    "fullNameMarathi": "रुपाली केशव सुतार",
    "fullNameEnglish": "Rupali Keshav Sutar",
    "relativeNameMarathi": "पतीचे नाव : केशव सुतार",
    "relativeNameEnglish": "Husband's Name: Keshav Sutar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 38,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 436,
    "voterId": "SSO7265861",
    "fullNameMarathi": "प्रियांका संतोष सुतार",
    "fullNameEnglish": "Priyanka Santosh Sutar",
    "relativeNameMarathi": "पतीचे नाव : संतोष सुतार",
    "relativeNameEnglish": "Husband's Name: Santosh Sutar",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 437,
    "voterId": "SSO7763295",
    "fullNameMarathi": "हर्षदा विश्वनाथ वायदंडे",
    "fullNameEnglish": "Harshada Vishwanath Waydande",
    "relativeNameMarathi": "पतीचे नाव : विश्वनाथ वायदंडे",
    "relativeNameEnglish": "Husband's Name: Vishwanath Waydande",
    "houseNoMarathi": "११९५",
    "houseNoEnglish": "1195",
    "roomNo": "1",
    "age": 28,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 438,
    "voterId": "SSO8232928",
    "fullNameMarathi": "ललित संजय चौधरी",
    "fullNameEnglish": "Lalit Sanjay Chaudhari",
    "relativeNameMarathi": "वडिलांचे नाव : संजय चौधरी",
    "relativeNameEnglish": "Father's Name: Sanjay Chaudhari",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 439,
    "voterId": "SSO8231573",
    "fullNameMarathi": "ज्योती राहुल गायकवाड",
    "fullNameEnglish": "Jyoti Rahul Gayakwad",
    "relativeNameMarathi": "पतीचे नाव : राहुल गायकवाड",
    "relativeNameEnglish": "Husband's Name: Rahul Gayakwad",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 440,
    "voterId": "SSO8231672",
    "fullNameMarathi": "संकेत सुनील घोडके",
    "fullNameEnglish": "Sanket Sunil Ghodke",
    "relativeNameMarathi": "वडिलांचे नाव : सुनील घोडके",
    "relativeNameEnglish": "Father's Name: Sunil Ghodke",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 23,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 441,
    "voterId": "SSO8231763",
    "fullNameMarathi": "माणिक सुदाम गोरे",
    "fullNameEnglish": "Manik Sudam Gore",
    "relativeNameMarathi": "पतीचे नाव : सुदाम गोरे",
    "relativeNameEnglish": "Husband's Name: Sudam Gore",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 51,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 442,
    "voterId": "SSO8231714",
    "fullNameMarathi": "विशाल सुदाम गोरे",
    "fullNameEnglish": "Vishal Sudam Gore",
    "relativeNameMarathi": "वडिलांचे नाव : सुदाम गोरे",
    "relativeNameEnglish": "Father's Name: Sudam Gore",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 33,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 443,
    "voterId": "SSO8232860",
    "fullNameMarathi": "श्रीजीत विजय नंदकर",
    "fullNameEnglish": "Shrijit Vijay Nandkar",
    "relativeNameMarathi": "वडिलांचे नाव : विजय नंदकर",
    "relativeNameEnglish": "Father's Name: Vijay Nandkar",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 26,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 444,
    "voterId": "SSO8232548",
    "fullNameMarathi": "रोहिणी वैभव निसाळ",
    "fullNameEnglish": "Rohini Vaibhav Nisal",
    "relativeNameMarathi": "पतीचे नाव : वैभव निसाळ",
    "relativeNameEnglish": "Husband's Name: Vaibhav Nisal",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 30,
    "genderMarathi": "स्त्री",
    "genderEnglish": "Female"
  },
  {
    "voterNo": 445,
    "voterId": "SSO8232605",
    "fullNameMarathi": "गौरव सतीश थिगळे",
    "fullNameEnglish": "Gaurav Satish Thigale",
    "relativeNameMarathi": "वडिलांचे नाव : सतीश थिगळे",
    "relativeNameEnglish": "Father's Name: Satish Thigale",
    "houseNoMarathi": "-",
    "houseNoEnglish": "-",
    "roomNo": "1",
    "age": 22,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
  },
  {
    "voterNo": 446,
    "voterId": "SSO7379194",
    "fullNameMarathi": "घनशाम कमलाकर अभंग",
    "fullNameEnglish": "Ghansham Kamalakar Abhang",
    "relativeNameMarathi": "वडिलांचे नाव : कमलाकर अभंग",
    "relativeNameEnglish": "Father's",
    "houseNoMarathi": "",
    "houseNoEnglish": "",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "",
    "genderEnglish": ""
  },
  {
    "voterNo": 447,
    "voterId": "",
    "fullNameMarathi": "",
    "fullNameEnglish": "",
    "relativeNameMarathi": "",
    "relativeNameEnglish": "",
    "houseNoMarathi": "",
    "houseNoEnglish": "",
    "roomNo": "1",
    "age": 0,
    "genderMarathi": "",
    "genderEnglish": ""
  }
];

// Filtered data
let filteredData = [...voterData];

// Pagination variables
let currentPage = 1;
let pageSize = 50;
let totalPages = 1;

// Initialize the app with a simple login gate
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing app...');
    console.log('Voter data count (embedded):', voterData.length);

    const loginContainer = document.getElementById('login-container');
    const appContent = document.getElementById('app-content');
    const loginButton = document.getElementById('login-button');
    const loginUser = document.getElementById('login-username');
    const loginPass = document.getElementById('login-password');
    const loginError = document.getElementById('login-error');

    // Fixed login credentials (case-sensitive)
    const VALID_USER = 'kalpana';
    const VALID_PASS = 'Sandbhor';

    function showApp() {
        if (loginContainer) loginContainer.style.display = 'none';
        if (appContent) appContent.style.display = 'block';

        // Initialize with embedded data
        filteredData = [...voterData];
        currentPage = 1;

        console.log('Filtered data count:', filteredData.length);

        // Add event listeners
        const searchInput = document.getElementById('searchInput');
        const genderFilter = document.getElementById('genderFilter');
        const minAge = document.getElementById('minAge');
        const maxAge = document.getElementById('maxAge');
        const houseFilter = document.getElementById('houseFilter');
        const voterIdFilter = document.getElementById('voterIdFilter');

        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (genderFilter) genderFilter.addEventListener('change', applyFilters);
        if (minAge) minAge.addEventListener('input', applyFilters);
        if (maxAge) maxAge.addEventListener('input', applyFilters);
        if (houseFilter) houseFilter.addEventListener('input', applyFilters);
        if (voterIdFilter) voterIdFilter.addEventListener('input', applyFilters);

        // Render table with embedded data
        renderTable();
        updateStats();
        renderPagination();

        console.log(`✅ Loaded ${voterData.length} voters from embedded data`);
    }

    function handleLogin() {
        const user = (loginUser?.value || '').trim();
        const pass = (loginPass?.value || '').trim();

        if (user === VALID_USER && pass === VALID_PASS) {
            if (loginError) loginError.classList.add('d-none');
            showApp();
        } else {
            if (loginError) loginError.classList.remove('d-none');
        }
    }

    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // Allow Enter key to submit
    [loginUser, loginPass].forEach(input => {
        if (input) {
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    handleLogin();
                }
            });
        }
    });
});

// Render table with current filtered data (with pagination)
function renderTable() {
    const tbody = document.getElementById('voterTableBody');
    const noResults = document.getElementById('noResults');
    const tableContainer = document.getElementById('tableContainer');
    const table = document.querySelector('.table-section table');
    
    console.log('renderTable called - filteredData length:', filteredData.length);
    
    if (!tbody) {
        console.error('❌ Table body element not found!');
        return;
    }
    
    if (filteredData.length === 0) {
        console.log('No data to display');
        if (tbody) tbody.innerHTML = '';
        if (table) table.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        renderPagination();
        return;
    }
    
    // Show table and hide no results
    if (tableContainer) tableContainer.style.display = 'block';
    if (table) table.style.display = 'table';
    if (noResults) noResults.style.display = 'none';
    
    // Calculate pagination
    totalPages = Math.ceil(filteredData.length / pageSize);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    // Get data for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const pageData = filteredData.slice(startIndex, endIndex);
    
    console.log(`Rendering page ${currentPage} of ${totalPages} - showing ${pageData.length} rows`);
    
    // Render only current page data (order must match table header)
    const tableHTML = pageData.map(voter => `
        <tr>
            <td>${voter.voterNo}</td>
            <td>${voter.voterId}</td>
            <td>${voter.roomNo || '1'}</td>
            <td>${voter.fullNameMarathi}</td>
            <td>${voter.fullNameEnglish}</td>
            <td>${voter.relativeNameMarathi}</td>
            <td>${voter.relativeNameEnglish}</td>
            <td>${voter.houseNoMarathi}</td>
            <td>${voter.houseNoEnglish}</td>
            <td>${voter.age > 0 ? voter.age : '-'}</td>
            <td>${voter.genderMarathi}</td>
            <td>${voter.genderEnglish}</td>
        </tr>
    `).join('');
    
    tbody.innerHTML = tableHTML;
    
    // Verify table was populated
    const rowsAfter = tbody.querySelectorAll('tr').length;
    console.log(`Table rows after render: ${rowsAfter}`);
    
    if (rowsAfter === 0) {
        console.error('❌ No rows rendered! Check data structure.');
        return;
    }
    
    renderPagination();
    console.log('✅ Table rendered successfully with', rowsAfter, 'rows');
    
    // Force table to be visible with !important styles
    if (table) {
        table.style.setProperty('display', 'table', 'important');
        table.style.setProperty('visibility', 'visible', 'important');
        table.style.setProperty('opacity', '1', 'important');
    }
    if (tableContainer) {
        tableContainer.style.setProperty('display', 'block', 'important');
        tableContainer.style.setProperty('visibility', 'visible', 'important');
        tableContainer.style.setProperty('opacity', '1', 'important');
    }
    
    // Verify visibility
    setTimeout(() => {
        const tableSection = document.querySelector('.table-section');
        const visibleRows = tbody.querySelectorAll('tr:not([style*="display: none"])').length;
        console.log('Visible table rows:', visibleRows);
        console.log('Table section exists:', !!tableSection);
        console.log('Table container display:', tableContainer ? window.getComputedStyle(tableContainer).display : 'N/A');
        console.log('Table display:', table ? window.getComputedStyle(table).display : 'N/A');
        
        if (tableSection && rowsAfter > 0) {
            const rect = tableSection.getBoundingClientRect();
            console.log('Table section position:', rect.top, rect.bottom);
            console.log('Window height:', window.innerHeight);
        }
    }, 200);
}

// Apply all filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genderFilter = document.getElementById('genderFilter').value;
    const minAge = parseInt(document.getElementById('minAge').value) || 0;
    const maxAge = parseInt(document.getElementById('maxAge').value) || 999;
    const houseFilter = document.getElementById('houseFilter').value.toLowerCase();
    const voterIdFilter = document.getElementById('voterIdFilter').value.toLowerCase();
    
    // Reset to first page when filtering
    currentPage = 1;
    
    filteredData = voterData.filter(voter => {
        // Search filter
        const matchesSearch = !searchTerm || 
            voter.fullNameEnglish.toLowerCase().includes(searchTerm) ||
            voter.fullNameMarathi.includes(searchTerm) ||
            voter.voterId.toLowerCase().includes(searchTerm) ||
            voter.houseNoEnglish.toLowerCase().includes(searchTerm) ||
            voter.houseNoMarathi.includes(searchTerm) ||
            voter.relativeNameEnglish.toLowerCase().includes(searchTerm) ||
            voter.relativeNameMarathi.includes(searchTerm);
        
        // Gender filter
        const matchesGender = !genderFilter || voter.genderEnglish === genderFilter;
        
        // Age filter (skip if age is 0 or missing)
        const matchesAge = !minAge && !maxAge || (voter.age > 0 && voter.age >= minAge && voter.age <= maxAge);
        
        // House number filter
        const matchesHouse = !houseFilter || 
            voter.houseNoEnglish.toLowerCase().includes(houseFilter) ||
            voter.houseNoMarathi.includes(houseFilter);
        
        // Voter ID filter
        const matchesVoterId = !voterIdFilter || 
            voter.voterId.toLowerCase().includes(voterIdFilter);
        
        return matchesSearch && matchesGender && matchesAge && matchesHouse && matchesVoterId;
    });
    
    renderTable();
    updateStats();
}

// Update statistics
function updateStats() {
    document.getElementById('totalVoters').textContent = voterData.length.toLocaleString();
    document.getElementById('filteredVoters').textContent = filteredData.length.toLocaleString();
    
    const maleCount = filteredData.filter(v => v.genderEnglish === 'Male').length;
    document.getElementById('maleCount').textContent = maleCount.toLocaleString();
}

// Render pagination controls
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const paginationInfo = document.getElementById('paginationInfo');
    
    if (filteredData.length === 0) {
        pagination.innerHTML = '';
        paginationInfo.textContent = 'Showing 0 - 0 of 0 entries';
        return;
    }
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    paginationInfo.textContent = `Showing ${(startIndex + 1).toLocaleString()} - ${endIndex.toLocaleString()} of ${filteredData.length.toLocaleString()} entries`;
    
    // Build pagination HTML
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage - 1}); return false;">
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;
    
    // Page numbers
    const maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="goToPage(1); return false;">1</a>
            </li>
        `;
        if (startPage > 2) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="goToPage(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="goToPage(${totalPages}); return false;">${totalPages}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage + 1}); return false;">
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTable();
    // Scroll to top of table
    document.querySelector('.table-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Change page size
function changePageSize() {
    pageSize = parseInt(document.getElementById('pageSize').value);
    currentPage = 1;
    renderTable();
}

// Reset all filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('minAge').value = '';
    document.getElementById('maxAge').value = '';
    document.getElementById('houseFilter').value = '';
    document.getElementById('voterIdFilter').value = '';
    
    filteredData = [...voterData];
    renderTable();
    updateStats();
}

// Export to CSV function removed (button removed from UI)

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

// Option 1: Load from JSON file
// Create a file: data/voters.json with your data
// Then uncomment: loadVoterData('data/voters.json'); in DOMContentLoaded
async function loadVoterData(url) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const tableContainer = document.getElementById('tableContainer');
    
    try {
        if (loadingIndicator) loadingIndicator.style.display = 'block';
        if (tableContainer) tableContainer.style.display = 'none';
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load data file');
        }
        const data = await response.json();
        
        // Replace hardcoded data with loaded data
        voterData = data;
        filteredData = [...voterData];
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'block';
        
        // Reset to first page
        currentPage = 1;
        
        // Render with loaded data
        renderTable();
        updateStats();
        renderPagination();
        
        console.log(`✅ Data loaded successfully: ${voterData.length} voters from ${url}`);
        return Promise.resolve();
    } catch (error) {
        console.error('❌ Error loading voter data from JSON:', error);
        console.error('⚠️ Make sure data/voters.json file exists and is accessible');
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'block';
        
        // Show error message to user
        const tbody = document.getElementById('voterTableBody');
        const noResults = document.getElementById('noResults');
        if (tbody && noResults) {
            tbody.innerHTML = '';
            document.querySelector('.table-section table').style.display = 'none';
            noResults.style.display = 'block';
            noResults.innerHTML = `
                <i class="bi bi-exclamation-triangle"></i>
                <h4>Error Loading Data</h4>
                <p>Could not load data from data/voters.json</p>
                <p style="font-size: 0.9rem; color: #999;">Please ensure the file exists and you're using a web server (not opening file directly).</p>
                <p style="font-size: 0.9rem; color: #999;">For local testing, use: <code>python -m http.server 8000</code></p>
            `;
        }
        
        updateStats();
        renderPagination();
        return Promise.reject(error);
    }
}

// Option 2: Load from CSV file
// Create a file: data/voters.csv with headers matching the table columns
// Then uncomment: loadFromCSV('data/voters.csv'); in DOMContentLoaded
async function loadFromCSV(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load CSV file');
        }
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        
        voterData = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            if (values.length === headers.length) {
                const voter = {
                    voterNo: parseInt(values[0]) || i,
                    voterId: values[1] || '',
                    fullNameMarathi: values[2] || '',
                    fullNameEnglish: values[3] || '',
                    relativeNameMarathi: values[4] || '',
                    relativeNameEnglish: values[5] || '',
                    houseNoMarathi: values[6] || '',
                    houseNoEnglish: values[7] || '',
                    age: parseInt(values[8]) || 0,
                    genderMarathi: values[9] || '',
                    genderEnglish: values[10] || ''
                };
                voterData.push(voter);
            }
        }
        
        filteredData = [...voterData];
        renderTable();
        updateStats();
        console.log('Data loaded successfully from CSV:', url);
    } catch (error) {
        console.error('Error loading voter data from CSV:', error);
        console.log('Using default sample data instead');
    }
}

// Option 3: Load from Google Sheets (Public Sheet)
// 1. Publish your Google Sheet as CSV
// 2. Get the shareable link
// 3. Replace the URL below with your Google Sheets CSV export URL
// Format: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0
async function loadFromGoogleSheets(sheetUrl) {
    try {
        const response = await fetch(sheetUrl);
        if (!response.ok) {
            throw new Error('Failed to load Google Sheet');
        }
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        
        voterData = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            if (values.length === headers.length && values[0]) {
                const voter = {
                    voterNo: parseInt(values[0]) || i,
                    voterId: values[1] || '',
                    fullNameMarathi: values[2] || '',
                    fullNameEnglish: values[3] || '',
                    relativeNameMarathi: values[4] || '',
                    relativeNameEnglish: values[5] || '',
                    houseNoMarathi: values[6] || '',
                    houseNoEnglish: values[7] || '',
                    age: parseInt(values[8]) || 0,
                    genderMarathi: values[9] || '',
                    genderEnglish: values[10] || ''
                };
                voterData.push(voter);
            }
        }
        
        filteredData = [...voterData];
        renderTable();
        updateStats();
        console.log('Data loaded successfully from Google Sheets');
    } catch (error) {
        console.error('Error loading data from Google Sheets:', error);
        console.log('Using default sample data instead');
    }
}

// File upload function removed (button removed from UI)

// ============================================
// CURRENT DATA SOURCE
// ============================================
// By default, the app uses the hardcoded voterData array above
// To change the data source, uncomment one of these options in DOMContentLoaded:
// 
// 1. JSON file: loadVoterData('data/voters.json');
// 2. CSV file: loadFromCSV('data/voters.csv');
// 3. Google Sheets: loadFromGoogleSheets('YOUR_GOOGLE_SHEETS_CSV_URL');
// ============================================

