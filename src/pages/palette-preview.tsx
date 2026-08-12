export default function PalettePreview() {
    const colors = [
        {name: "Peach", hex: "#FFE8D6"},
        { name: "Berry", hex: "#7A2E4D" },
        { name: "Rose", hex: "#FF7A59" },
        { name: "Gold", hex: "#FFB84D" },
        { name: "Ink", hex: "#2B2416" },
    ];

    return (
        <div className="min-h-screen bg-ink text-paper p-12">
            <h1 className="text-3xl font-display mb-8">Bloom Market Palette</h1>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {colors.map((c) => (
                    <div key={c.hex} className="flex flex-col items-center">
                        <div
                            className="w-full h-32 rounded-xl shadow-lg"
                            style={{ backgroundColor: c.hex }}
                        />
                        <p className="mt-4 font-medium">{c.name}</p>
                        <p className="text-paper/60 text-sm">{c.hex}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}