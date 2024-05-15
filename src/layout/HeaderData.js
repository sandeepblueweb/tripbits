export const HeaderData = [

    {
        menu:"Home",
        link:"/",
     },
    {
        menu:"Categories",
        link:"/#",
        submenu:true,
      subMenuitem:[
         {
             subItem:"Tours",
             linkL:"/#",
             subMenuActive:true,
             subItems:[
                {
                    item:"Tour Grid",
                    link:"/tour-search"
                },
                {
                    item:"Tour Details",
                    link:"/tour-details"
                },
                {
                    item:"Tour Booking",
                    link:"/tour-booking"
                },
                {
                    item:"Top Destination",
                    link:"/top-destinations"
                },
                {
                    item:"Destination Details",
                    link:"/destinations-details"
                },
             ]
         },
        
         {
             subItem:"Flights",
             linkL:"/#",
             subMenuActive:true,
             subItems:[
                {
                    item:"Flight",
                    link:"/flight-search"
                },
                {
                    item:"Flight Booking",
                    link:"/booking-confirmation"
                },
                
             ]
         },
        
        ]
     },
     {
        menu:"Page",
        link:"/#",
        submenu:true,
      subMenuitem:[
         {
             subItem:"About",
             linkL:"/about",
             subMenuActive:false,
         },
        
         {
             subItem:"Team",
             linkL:"/tour-guids",
             subMenuActive:false,
         },
        
         {
             subItem:"Testimonials",
             linkL:"/testimonials",
             subMenuActive:false,
         },
        
         {
             subItem:"FAQ",
             linkL:"/faqs",
             subMenuActive:false,
         },
         {
             subItem:"Booking Confirmation",
             linkL:"/booking-confirmation",
             subMenuActive:false,
         },
        
         {
             subItem:" Become Expert",
             linkL:"/become-expert",
             subMenuActive:false,
         },
         {
             subItem:"User Pages",
             linkL:"/#",
             subMenuActive:true,
             subItems:[
                {
                    item:"Login",
                    link:"/login"
                },
                {
                    item:"Register",
                    link:"/register"
                },
                {
                    item:"Forget Password",
                    link:"/forget-password"
                },
                {
                    item:"Verify OTP",
                    link:"/verifyOTP"
                },
                {
                    item:"Reset Password",
                    link:"/reset-password"
                },
                
             ]
         },
         {
            subItem:"Privacy Policy",
            linkL:"/privacy-policy",
            subMenuActive:false,
        },
        {
            subItem:"404 Error",
            linkL:"*",
            subMenuActive:false,
        },
        
        ]
     },
     {
        menu:"News",
        link:"/#",
        submenu:true,
      subMenuitem:[
         {
             subItem:"News",
             linkL:"/news",
             subMenuActive:false,
         },
         {
             subItem:"News Details",
             linkL:"/news-details",
             subMenuActive:false,
         },
        
        ]
     },
     {
        menu:"Contact",
        link:"/contact",
     },
]