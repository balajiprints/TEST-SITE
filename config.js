// Balaji Prints - Configuration Data Matrix
const CONFIG = {
    brand: {
        name: "Balaji Prints",
        tagline: "Premium Print & Personalized Design",
        mobile: "9414350535",
        upiId: "9414350535@okbizaxis", // आपकी अपडेटेड UPI ID
        address: "Ganpati Plaza, Nai Sadak, Churu, Rajasthan",
        logoUrl: "logo.png",
        qrUrl: "qr.png"
    },
    categories: [
        {
            id: "cat-1",
            name: "Certificate Print",
            description: "High-quality academic & corporate certificates",
            image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80",
            products: [
                { id: "p1-1", name: "Design A (A4 Size)", price: 150, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80", note: "Delivery Charges Extra" },
                { id: "p1-2", name: "Design B (12x18 Size)", price: 300, image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&q=80", note: "Delivery Charges Extra" }
            ]
        },
        {
            id: "cat-2",
            name: "Notes Print",
            description: "Fast and clean document & notes printing with binding option",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
            isNotesType: true,
            products: [
                { id: "p2-1", name: "Notes with Spiral Binding", price: 0.60, bindingCharge: 30, isPerPage: true, image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80", note: "₹0.60 per page + ₹30 Mandatory Spiral Binding Charge" }
            ]
        },
        {
            id: "cat-3",
            name: "Visiting Card",
            description: "Premium business cards to elevate your brand",
            image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80",
            products: [
                { id: "p3-1", name: "Classic Corporate Layout", price: 1200, image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=400&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-2", name: "Modern Minimalist Design", price: 1500, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-3", name: "Luxury Matte Finish Layout", price: 1800, image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-4", name: "Creative Studio Design", price: 1600, image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400&q=80", note: "Fixed: 1000 Cards per order" }
            ]
        },
        {
            id: "cat-4",
            name: "Photo Frame",
            description: "Beautifully crafted frames for your memories",
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80",
            hasVariantsPopup: true, // ओपन बॉक्स फीचर फ्लैग
            variants: [
                { id: "v4-1", name: "Birthday Celebration Theme", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&q=80" },
                { id: "v4-2", name: "Anniversary / Couple Theme", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300&q=80" },
                { id: "v4-3", name: "Engagement Elegant Theme", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80" }
            ],
            products: [
                { id: "p4-1", name: "University Frame - A4 Size (8x12 inches)", price: 450, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80", note: "Premium customized template border" },
                { id: "p4-2", name: "Engagement Frame - 12x18 inches", price: 850, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80", note: "Elegant large layout setup" }
            ]
        },
        {
            id: "cat-5",
            name: "Photo Collage Frame",
            description: "Multiple memories captured in a single frame",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80",
            products: [
                { id: "p5-1", name: "2 Photo Collage Frame", price: 600, image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80", note: "Custom dual layout matrix" },
                { id: "p5-2", name: "4 Photo Collage Frame", price: 800, image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", note: "Grid quadrant layout split" },
                { id: "p5-3", name: "6 Photo Collage Frame", price: 1100, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80", note: "Premium abstract layout setup" },
                { id: "p5-4", name: "8 Photo Collage Frame", price: 1400, image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80", note: "Grand gallery luxury style" }
            ]
        },
        {
            id: "cat-6",
            name: "Spiral Photo Book",
            description: "Personalized flip-through photo albums",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
            products: [
                { id: "p6-1", name: "25 Photos Spiral Book", price: 500, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80", note: "Includes custom cover design layout" },
                { id: "p6-2", name: "50 Photos Spiral Book", price: 900, image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&q=80", note: "Includes custom cover design layout" },
                { id: "p6-3", name: "75 Photos Spiral Book", price: 1300, image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80", note: "Includes custom cover design layout" }
            ]
        },
        {
            id: "cat-7",
            name: "Bill Book",
            description: "Professional carbonless duplicate receipt books",
            image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80",
            products: [
                { id: "p7-1", name: "A4 Size Bill Book (Duplicate/2-Copy Set)", price: 350, image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&q=80", note: "Carbonless duplicate premium finish" }
            ]
        },
        {
            id: "cat-8",
            name: "Personalised Pen Print & Custom Orders",
            description: "Laser printed pens & dynamic custom requests",
            image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
            isPenType: true,
            hasVariantsPopup: true, // ओपन बॉक्स फीचर फ्लैग
            variants: [
                { id: "v8-1", name: "Golden Engraved Premium Text", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&q=80" },
                { id: "v8-2", name: "Silver Metallic Finish Text", image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=300&q=80" },
                { id: "v8-3", name: "Matte Black Corporate Identity", image: "https://images.unsplash.com/photo-1585336261022-675929945037?w=300&q=80" }
            ],
            products: [
                { id: "p8-pen1", name: "Laser Printed Pen - 1 Qty", price: 50, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
                { id: "p8-pen5", name: "Laser Printed Pen - 5 Qty", price: 230, isPenPack: true, image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&q=80" },
                { id: "p8-pen10", name: "Laser Printed Pen - 10 Qty", price: 440, isPenPack: true, image: "https://images.unsplash.com/photo-1585336261022-675929945037?w=400&q=80" },
                { id: "p8-c01", name: "Single Colour Pen (Code: 01)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&q=80" },
                { id: "p8-custom", name: "Other Custom Requirements / Open Request", price: 0, isDynamic: true, image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80", note: "Price discussed on WhatsApp based on requirements" }
            ]
        }
    ]
};
