// Balaji Prints - Configuration Data
const CONFIG = {
    brand: {
        name: "Balaji Prints",
        tagline: "Premium Print & Personalized Design",
        mobile: "9414350535",
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
                { id: "p1-1", name: "Design A (A4 Size)", price: 150, note: "Delivery Charges Extra", image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&q=80" },
                { id: "p1-2", name: "Design B (12x18 Size)", price: 300, note: "Delivery Charges Extra", image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&q=80" }
            ]
        },
        {
            id: "cat-2",
            name: "Notes Print",
            description: "Fast and clean document & notes printing",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
            isNotesType: true, 
            products: [
                { id: "p2-1", name: "Notes with Binding (Per Page)", price: 0.60, bindingCharge: 30, isPerPage: true, note: "Condition: PDF background must be White. + ₹30 Binding Charge applied automatically.", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" }
            ]
        },
        {
            id: "cat-3",
            name: "Visiting Card",
            description: "Premium business cards to elevate your brand",
            image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80",
            products: [
                { id: "p3-1", name: "Classic Corporate Layout", price: 1200, note: "Fixed: 1000 Cards per order", image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=400&q=80" },
                { id: "p3-2", name: "Modern Minimalist Design", price: 1500, note: "Fixed: 1000 Cards per order", image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&q=80" },
                { id: "p3-3", name: "Luxury Matte Finish Layout", price: 1800, note: "Fixed: 1000 Cards per order", image: "https://images.unsplash.com/photo-1611605698335-8b15d27e83f9?w=400&q=80" },
                { id: "p3-4", name: "Creative Studio Design", price: 1600, note: "Fixed: 1000 Cards per order", image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&q=80" }
            ]
        },
        {
            id: "cat-4",
            name: "Photo Frame",
            description: "Beautifully crafted frames for your memories",
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80",
            hasSubTypes: true, // ओपन करने के लिए फ्लैग
            products: [
                { 
                    id: "p4-1", 
                    name: "University Frame - A4 Size (8x12 inches)", 
                    price: 450, 
                    note: "Premium layout mockup included", 
                    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80",
                    subTypes: [
                        { id: "p4-1-birth", name: "Birthday Frame (A4)", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&q=80" },
                        { id: "p4-1-anniv", name: "Anniversary Frame (A4)", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300&q=80" },
                        { id: "p4-1-engag", name: "Engagement Frame (A4)", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80" }
                    ]
                },
                { 
                    id: "p4-2", 
                    name: "Engagement Frame - 12x18 inches", 
                    price: 850, 
                    note: "Elegant anniversary/engagement layout", 
                    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80",
                    subTypes: [
                        { id: "p4-2-birth", name: "Birthday Frame (12x18)", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&q=80" },
                        { id: "p4-2-anniv", name: "Anniversary Frame (12x18)", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&q=80" },
                        { id: "p4-2-engag", name: "Engagement Frame (12x18)", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&q=80" }
                    ]
                }
            ]
        },
        {
            id: "cat-5",
            name: "Photo Collage Frame",
            description: "Multiple memories captured in a single frame",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80",
            products: [
                { id: "p5-1", name: "2 Photo Collage Frame", price: 600, note: "Custom dual layout", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80" },
                { id: "p5-2", name: "4 Photo Collage Frame", price: 800, note: "Grid matrix layout", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80" },
                { id: "p5-3", name: "6 Photo Collage Frame", price: 1100, note: "Premium gallery layout", image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&q=80" },
                { id: "p5-4", name: "8 Photo Collage Frame", price: 1400, note: "Grand celebration layout", image: "https://images.unsplash.com/photo-1487017159346-618be2949538?w=400&q=80" }
            ]
        },
        {
            id: "cat-6",
            name: "Spiral Photo Book",
            description: "Personalized flip-through photo albums",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
            products: [
                { id: "p6-1", name: "25 Photos Spiral Book", price: 500, note: "Includes custom cover design", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" },
                { id: "p6-2", name: "50 Photos Spiral Book", price: 900, note: "Includes custom cover design", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80" },
                { id: "p6-3", name: "75 Photos Spiral Book", price: 1300, note: "Includes custom cover design", image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80" }
            ]
        },
        {
            id: "cat-7",
            name: "Bill Book",
            description: "Professional carbonless duplicate receipt books",
            image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80",
            products: [
                { id: "p7-1", name: "A4 Size Bill Book (Duplicate/2-Copy Set)", price: 350, note: "Carbonless duplicate finish", image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&q=80" }
            ]
        },
        {
            id: "cat-8",
            name: "Personalised Pen Print & Custom Orders",
            description: "Laser printed pens & dynamic custom requests",
            image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
            isPenType: true, 
            products: [
                // 1. Laser Printed Pens Box/Pack Variant (With Inner Variety)
                { 
                    id: "p8-group-laser", 
                    name: "Laser Printed Pens (Pack Options)", 
                    price: 50, 
                    isPenPackGroup: true,
                    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80",
                    variants: [
                        { id: "p8-pen1", name: "Laser Printed Pen - 1 Qty", price: 50 },
                        { id: "p8-pen2", name: "Laser Printed Pen - 2 Qty", price: 95 },
                        { id: "p8-pen5", name: "Laser Printed Pen - 5 Qty", price: 230 },
                        { id: "p8-pen10", name: "Laser Printed Pen - 10 Qty", price: 440 },
                        { id: "p8-pen20", name: "Laser Printed Pen - 20 Qty", price: 850 },
                        { id: "p8-pen30", name: "Laser Printed Pen - 30 Qty", price: 1200 },
                        { id: "p8-pen40", name: "Laser Printed Pen - 40 Qty", price: 1550 },
                        { id: "p8-pen50", name: "Laser Printed Pen - 50 Qty", price: 1900 }
                    ]
                },
                // 2. Single Colour Code Box Variant (With Inner Variety)
                {
                    id: "p8-group-single",
                    name: "Single Colour Code Pens (Min 100 Qty)",
                    price: 12,
                    isSingleColorGroup: true,
                    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&q=80",
                    variants: [
                        { id: "p8-c01", name: "Single Colour Pen (Code: 01)", price: 12 },
                        { id: "p8-c02", name: "Single Colour Pen (Code: 02)", price: 12 },
                        { id: "p8-c03", name: "Single Colour Pen (Code: 03)", price: 12 },
                        { id: "p8-c04", name: "Single Colour Pen (Code: 04)", price: 12 },
                        { id: "p8-c05", name: "Single Colour Pen (Code: 05)", price: 12 },
                        { id: "p8-c06", name: "Single Colour Pen (Code: 06)", price: 12 },
                        { id: "p8-c07", name: "Single Colour Pen (Code: 07)", price: 12 },
                        { id: "p8-c08", name: "Single Colour Pen (Code: 08)", price: 12 },
                        { id: "p8-c09", name: "Single Colour Pen (Code: 09)", price: 12 },
                        { id: "p8-c11", name: "Single Colour Pen (Code: 011)", price: 14 },
                        { id: "p8-c13", name: "Single Colour Pen (Code: 013)", price: 14 },
                        { id: "p8-c14", name: "Single Colour Pen (Code: 014)", price: 14 }
                    ]
                },
                // Dynamic Slot
                { id: "p8-custom", name: "Other Custom Requirements / Open Request", price: 0, isDynamic: true, note: "Price discussed on WhatsApp based on requirements", image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80" }
            ]
        }
    ]
};