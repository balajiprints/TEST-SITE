// Balaji Prints - E-Commerce Platform Configuration
const STORE_CONFIG = {
    brandName: "Balaji Prints",
    tagline: "Premium Print & Personalized Design",
    contact: {
        mobile: "9414350535",
        whatsapp: "9414350535",
        address: "Ganpati Plaza, Nai Sadak, Churu, Rajasthan"
    },
    payment: {
        upiId: "9414350535@okbizaxis",
        qrImage: "WhatsApp Image 2026-06-04 at 16.14.11.jpeg",
        logoImage: "ChatGPT Image Jun 4, 2026, 02_18_28 PM.png"
    },
    categories: [
        {
            id: "cat_1",
            name: "Certificate Print",
            note: "Delivery Charges Extra",
            products: [
                { id: "p_1_1", name: "Design A (A4 Size)", price: 49, image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_1_2", name: "Design B (12x18 Size)", price: 99, image: "https://images.unsplash.com/photo-1621252179027-94459d278660?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        },
        {
            id: "cat_2",
            name: "Notes Print",
            note: "Condition: PDF background must be White.",
            products: [
                { id: "p_2_1", name: "Notes with Binding", price: 0.60, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60", isPdf: true, isPerPage: true }
            ]
        },
        {
            id: "cat_3",
            name: "Visiting Card",
            note: "Fixed Quantity: Base order of 1000 cards.",
            products: [
                { id: "p_3_1", name: "Premium Matte Card", price: 850, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60", isFixedQty: true, qtyLabel: "1000 Cards" },
                { id: "p_3_2", name: "Glossy Finish Card", price: 950, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60", isFixedQty: true, qtyLabel: "1000 Cards" },
                { id: "p_3_3", name: "Textured Luxury Card", price: 1450, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60", isFixedQty: true, qtyLabel: "1000 Cards" },
                { id: "p_3_4", name: "Metallic Spot UV Card", price: 1950, image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60", isFixedQty: true, qtyLabel: "1000 Cards" }
            ]
        },
        {
            id: "cat_4",
            name: "Photo Frame",
            note: "Includes University & Engagement layout variants",
            products: [
                { id: "p_4_1", name: "A4 Size (8x12 inches) Frame", price: 299, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_4_2", name: "12x18 inches Premium Frame", price: 599, image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        },
        {
            id: "cat_5",
            name: "Photo Collage Frame",
            note: "Beautifully styled grid configurations",
            products: [
                { id: "p_5_1", name: "2 Photo Collage Frame", price: 399, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_5_2", name: "4 Photo Collage Frame", price: 499, image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_5_3", name: "6 Photo Collage Frame", price: 699, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_5_4", name: "8 Photo Collage Frame", price: 899, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        },
        {
            id: "cat_6",
            name: "Spiral Photo Book",
            note: "Premium high-gloss print with durable protective spiral",
            products: [
                { id: "p_6_1", name: "25 Photos Spiral Book", price: 450, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_6_2", name: "50 Photos Spiral Book", price: 790, image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60", isPdf: false },
                { id: "p_6_3", name: "75 Photos Spiral Book", price: 1100, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        },
        {
            id: "cat_7",
            name: "Bill Book",
            note: "Carbonless duplicate setup (2-Copy Set)",
            products: [
                { id: "p_7_1", name: "A4 Size Bill Book (Duplicate)", price: 350, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        },
        {
            id: "cat_8",
            name: "Custom Printing Slot",
            note: "Upload any template or project file with custom specs",
            products: [
                { id: "p_8_1", name: "Other Custom Requirements", price: 150, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60", isPdf: false }
            ]
        }
    ]
};