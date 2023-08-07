import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources : {
        en : {
            translation: {
                test : "testing i18n translation thingy",
                home  : "Home",
                implants : "Dental Implants",
                dentalbridges : "Dental Bridges",
                aboutus : "Why Us",
                tourism : "Dental Tourism",
                testimonial : "Testimonials",
                blog : "Blog",
                otherserv : "Other Services",
                orthodontics : "Orthodontics",
                general : "General Dentistry",
                dentures : "Dentures",
                veneers : "Dental Veneers",
                contactus : "Contact Us",
                welcome : "WELCOME TO ANDENT",
                homehero : "Tirana's Top Dental Clinic for",
                homehero2 : "and",
                homeheroh2 : "Quality",
                homeheroh22 : "Comfort",
                homeherop : "We are devoted to delivering remarkable results for all of our orthodontic treatments. Take the first step towards your dream smile with our personalized care",
                yourphone : "Your Phone Number...",
                yourname : "Your Name...",
                callback : "Get Call Back",
                reviews : "See What Others Have to Say",
                servicesh3 : "Experience These And More",
                servicesh2 : "Dental Treatments",
                service1 : "Dental Implants",
                service2 : "Dental Crowns and Bridges",
                service3 : "Dentures",
                service4 : "Cosmetic Dentistry and Veneers",
                service5 : "Orthodontic Treatment",
                service6 : "General Dentistry",
                service1p : "Durable, artificial tooth roots to support natural-looking replacement teeth.",
                service2p : "High-quality prosthetics for damaged or missing teeth, ensuring durability.",
                service3p : "Custom-made replacements for comfortable chewing, speaking, and smiling.",
                service4p : "Transform your smile with whitening, veneers, and personalized makeovers.",
                service5p : "Achieve straighter teeth and correct bites with orthodontic treatments, including Invisalign",
                service6p : "Preventive care, treatments, and maintenance for optimal oral health and a beautiful smile.",
                aboutUs : "About Us",
                whyandent : "Why Andent?",
                whyandentp : "Your Trusted Dental Clinic in Albania. With 10+ years of expertise, our renowned dentist Dr. Anduela Çurmaku leads our exceptional team. From painless implants to advanced treatments, our precision, safety, and top-quality equipment ensure optimal oral health. Trust our skilled team for a confident smile.",
                learnmore : "Learn More",
                meetTeam : "Meet Our Dental Team",
                clerk: "Front desk clerk",
                dentist: "Dentistry",
                secretary: "Secretary",
                tech: "Dental technician",
                dentaltourismcoord : "Dental Tourism Clinic Coordinator",
                assistant : "Dental Assistant",
                staff1 : "Anduela Curmaku",
                staff2 : "Blerta Curmaku",
                staff3 : "Ermal Cuadari",
                staff4 : "Laurent Bixheku",
                staff5 : "Leonard Maci",
                staff6 : "Manuela Manjani",
                staff7 : "Marvin Dedaj",
                staff8 : "Rudina Bitri",
                staff9 : "Safjela Baja",
                makethemosttrip : "Make The Most Our Of Your Trip",
                freeaccom : "Free accommodation in a 4-star hotel in the heart of Tirana",
                freeaccomp  : "Allowing you to immerse yourself in the vibrant life and captivating attractions while receiving top-tier dental services.",
                assistancewithtravel  : "Assistance with your dental travel experience from start to finish",
                assistancewithtravelp  : "Services like picking you up and dropping you off from the airport, scheduling appointments, reminders, translations, and more.",
                traveltips : "Travel tips and tours to make the most of your trip",
                traveltipsp : "To ensure you're getting the most out of your trip, we will personalise your journey based on your likes and dislikes.",
                test1name  : "Gaetano",
                test1desc  : "Dentures are removable dental appliances that are crafted to resemble your natural teeth and gums. They are custom-made to fit your unique mouth shape and are designed to restore your smile and ability to chew and speak properly. Dentures are made from durable materials that are both comfortable and functional.",
                test2name : "Roberta",
                test2desc  : "Dentures are removable dental appliances that are crafted to resemble your natural teeth and gums. They are custom-made to fit your unique mouth shape and are designed to restore your smile and ability to chew and speak properly. Dentures are made from durable materials that are both comfortable and functional.",
                bookaptmnt : "Book an Appointment",
                fname : "First Name",
                lname  : "Last Name",
                email : "Email",
                number : "Phone Number",
                comments : "Write Comments",
                file : "Upload Dental Scan or X-Ray;",
                upload : "Upload",
                booknow :"Book Now",
                address : "Clinic Address",
                saveupto70 : "Save Up to 70%",
                implantshero : "Discover Exceptional Dental Implants &",
                implantsherop : "Say goodbye to the challenges of missing or damaged teeth. We restore your smile with our affordable and long lasting implants for improved oral health.",
                implantsbenefits :"Benefits of Dental Implants",
                impben1 : "Permanent and Sturdy Foundation",
                impben1p : "Dental implants provide a long-lasting solution for replacing missing teeth, offering a secure and stable base.",
                impben2 : "Improved Functionality",
                impben2p : "With dental implants, you can regain full chewing ability and restore proper speech, enhancing your overall quality of life.",
                impben3 : "Prevents Dental Complications",
                impben3p : "By replacing missing teeth, dental implants prevent surrounding teeth from shifting, maintaining proper bite alignment and avoiding potential jawbone deterioration.",
                impben4 : "Preserves Dental Structure",
                impben4p : "Dental implants help preserve the integrity of your dental structure, preventing the loss of adjacent teeth and supporting optimal oral health.",
                impben5 : "Stimulates Jawbone Health",
                impben5p : "Implants stimulate the jawbone, promoting healthy bone growth and preventing bone loss commonly associated with missing teeth.",
                implantswork : "How Dental Implants Work",
                impwork1 : "Implant is inserted into the bone",
                impwork2  : "Healing Process of the bone (osseointegration)",
                impwork3 : "Dental Abutment is places on the implant",
                impwork4 : "Ceramic Crown is placed which replaces the real tooth",
                experiencelifechanging : "Experience the",
                experiencelifechanging1 : "life-changing",
                experiencelifechanging3 : "benefits of dental implants at our clinic.",
                experiencelifechangingp : "Our experienced team ensures precise implant placement, exceptional aesthetics, and superior functionality.",
                stepbystep : "Step by Step Procedure with Andent",
                imp1 : "1. Comprehensive Assessment",
                imp1p  : "We kickstart your journey with a detailed evaluation of your oral health, understanding your needs, and discussing the best implant solution for you. We leverage advanced imaging technology for precise treatment planning",
                imp2 : "2. Implant Surgery",
                imp2p  : "Our dental experts will then place the titanium implant into your jawbone. This is done with precision and care, prioritizing your comfort throughout the process.",
                imp3 : "3. Healing and Integration",
                imp3p  : "Post-surgery, we allow time for osseointegration, where the implant fuses with the jawbone. This healing process, which can take a few months, ensures a stable foundation for the new tooth.",
                imp4 : "4. Abutment Placement",
                imp4p  : "Once healed, an abutment, a small connector, is attached to the implant. This will hold your new tooth in place.",
                imp5 : "5. Beautiful Restoration",
                imp5p  : "The final step is the placement of the prosthetic tooth, beautifully crafted to blend seamlessly with your natural teeth. With your new smile in place, you're all set to chew, speak, and beam with confidence.",
                imptypes : "Types Of Dental Implants",
                impt1 : "Zirconia Implants",
                impt1p1 : "Metal-free option with excellent aesthetics.",
                impt1p2 : "Biocompatible ceramic material.",
                impt1p3 : "Perfect for patients seeking a natural look and feel.",
                impt2 : "Titanium Implants",
                impt2p1 : "Long lasting solution for natural tooth replacement.",
                impt2p2 : "Reduced risk of rejection or allergic reactions.",
                impt2p3 : "Prevents bone loss from missing teeth.",
                heartgirlh  : "Contact us to learn more about our services",
                heartgirlp  : "Guided by our expert team, we focus on your comfort and satisfaction. Achieve a confident smile with Andent.",
                bridgeshero : "Discover Dental Bridges & Crowns &",
                bridgesherop  : "Say goodbye to the challenges of missing or damaged teeth. We restore your smile with our affordable and long lasting implants for improved oral health.",
                bridgesimportance :"Benefits of Dental Implants",
                bridgesimp1 : "Restored Chewing Function ",
                bridgesimp1p : "Experience better biting and chewing capabilities with durable dental crowns and bridges and enjoy your favorite foods without discomfort",
                bridgesimp2 : "Improved Speech",
                bridgesimp2p : "Dental crowns and bridges fill gaps which ensure confident and articulate communication",
                bridgesimp3 : "Enhanced Aesthetics and Confidence",
                bridgesimp3p : "Achieve a natural-looking smile that boosts self-confidence and engage confidently in social interactions",
                bridgesimp4 : "Longevity and Reliability",
                bridgesimp4p : "Our expertly crafted dental crowns and bridges provide durability and reliable performance for years",
                bridgesimp5 : "Preservation of Oral Health",
                bridgesimp5p : "Preserve jawbone and facial structure, preventing bone loss and maintaining natural tooth alignment",
                howbridgeswork : "How Dental Bridges and Crowns Work",
                bridges : "Bridges",
                bridgesp  : "Bridges are fixed prostheses that replace missing teeth by using artificial teeth to bridge the gap, supported by neighboring teeth or implants.",
                crowns : "Crowns",
                crownsp : "Crowns are custom-made tooth-shaped restorations that protect and strengthen damaged teeth, while enhancing their appearance.",
                howbridgesdifferent : "How bridges are different than implants",
                howbridgesdifferentp : "Dental bridges rely on adjacent teeth for support, while dental implants are independently anchored into the jawbone, offering enhanced durability",
                bridges1 : "1. Consultation",
                bridges1p  : "Our experienced dental team will assess your oral health and discuss your goals and concerns.",
                bridges2 : "2. Treatment Planning",
                bridges2p  : "A personalized treatment plan will be developed based on your unique needs and preferences",
                bridges3 : "3. Tooth Preparation",
                bridges3p  : "For crowns, the damaged tooth is reshaped to create space for the crown. For bridges, adjacent teeth are prepared to support the bridge.",
                bridges4 : "4. Impressions to ensure optimal fit",
                bridges4p  : "An impression of your teeth is taken to ensure the crowns or bridges are custom-fit for optimal comfort and functionality.",
                bridges5 : "5. Placement of crowns or bridges ",
                bridges5p  : "Once your custom crowns or bridges are ready, they will be securely bonded or fixed in place and you can enjoy your new healthy teeth.",
                bridgestypes : "Types of Dental Crowns and Bridges",
                bridgest1 : "Zirconia Crowns",
                bridgest1p : "Known for their strength and durability, zirconia crowns are highly resistant to chipping or cracking.",
                bridgest2 : "Porcelain Crowns",
                bridgest2p : "Natural-looking and durable, porcelain crowns are a popular choice for front teeth.",
                bridgest3 : "Ceramic Crowns",
                bridgest3p : "Ceramic crowns offer excellent aesthetics and are metal-free, making them a great option for patients with metal allergies.",
                generaldentistryhero : "Discover Premium Dentistry Services &",
                generaldentistryherop : "Say goodbye to the challenges of missing or damaged teeth. We restore your smile with our affordable and long lasting implants for improved oral health.",
                experienceourtreatments : "Experience Our Dental Treatments",
                treatment1h : "Routine Dental Examinations and Check-ups",
                treatment1p : "Stay ahead of potential dental problems with regular check-ups. Our skilled dentists perform thorough examinations, detecting any oral health issues early on and providing timely treatments.",
                treatment2h : "Dental Cleanings ",
                treatment2p : "Experience a fresh and healthy smile with our professional dental cleanings. Our hygienists employ advanced techniques to remove plaque, tartar, and stains, ensuring your teeth are thoroughly cleaned.",
                treatment3h : "Dental Fillings",
                treatment3p : "Restore the strength and appearance of your damaged teeth with our amalgam or composite resin fillings. Our dentists ensure durable and aesthetically pleasing results, preserving your oral health.",
                treatment4h : "Tooth Extractions",
                treatment4p : "In cases where a tooth is beyond repair due to severe damage or infection, our skilled dentists perform tooth extractions with utmost care. We provide comprehensive aftercare instructions to facilitate a smooth recovery.",
                treatment5h : "Dental Sealants",
                treatment5p : "Protect your teeth from cavities with dental sealants. Our thin, protective coatings are applied to the chewing surfaces of your teeth, particularly beneficial for children and individuals prone to dental decay.",
                treatment6h : "Fluoride Treatments",
                treatment6p : "Strengthen your tooth enamel and prevent tooth decay with our fluoride treatments. Our application of this essential mineral provides an extra layer of protection, especially for those at higher risk of cavities.",
                treatment7h : "Treatment for Gum Disease (Gingivitis)",
                treatment7p : "Combat gum disease with our effective treatments. Our comprehensive approach eliminates bacteria and restores gum health, preventing further oral health complications.",
                treatment8h : "Dental X-Rays",
                treatment8p : "Accurate diagnoses and treatment planning are made possible with dental X-rays. Our modern imaging technology captures detailed images, aiding in the detection of hidden dental issues.",
                treatment9h : "Dental Bonding",
                treatment9p : "Enhance the appearance and functionality of your teeth with dental bonding. Our skilled dentists use tooth-colored resin material to repair chips, cracks, or discoloration, restoring your confident smile.",
                treatment10h : "Oral Hygiene Instructions",
                treatment10p : "Our dedicated dental team takes the time to educate patients on proper oral hygiene techniques. We provide personalized instructions to help you maintain optimal dental health at home.",
                













            }
        },
        it : {
            translation: {
                test : "testing i18n translation thingy in italian"
            }
        }
    }
  });


export default i18n;