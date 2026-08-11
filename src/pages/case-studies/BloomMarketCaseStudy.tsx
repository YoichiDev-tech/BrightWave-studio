import BrowserChrome from "../../components/Badge";
import BloomMock from "../../components/portfolioMocks/BloomMock";
import Screenshot from "../../components/Screenshot";

export default function BloomMarketCaseStudy() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32 cursor-default">
      <div className="mx-auto max-w-4xl px-6">

        {/* Hero */}
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Bloom Market — Case Study
        </h1>
        <p className="mt-6 text-paper/70 leading-relaxed">
          A deeper look at how the Bloom Market landing page was designed —
          exploring palette, shapes, typography, and the playful visual language
          behind the final template.
        </p>

        {/* Final Mock */}
        <div className="mt-12">
          <BrowserChrome bg="#FFE8D6">
            <BloomMock />
          </BrowserChrome>
        </div>

        {/* Overview */}
        <div className="mt-20">
          <h2 className="font-display text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            Bloom Market is a boutique flower and gift shop with a maximalist,
            expressive identity. The goal was to create a landing page that
            feels alive — oversized type, organic shapes, and a palette built
            around warmth and celebration.
          </p>
        </div>

        {/* Palette */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Color Palette</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            The palette mixes soft peach tones with deep berry accents. This
            creates a balance between approachability and richness — perfect
            for a boutique brand.
          </p>

          <Screenshot label="Palette screenshot goes here" />
        </div>

        {/* Typography */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Typography</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            The type system uses a bold display font for headlines and a clean
            sans-serif for supporting text. This contrast reinforces the playful
            personality of the brand while keeping the content readable.
          </p>

          <Screenshot label="Typography screenshot goes here" />
        </div>

        {/* Layout */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Layout & Composition</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            The layout uses large spacing, asymmetrical blocks, and curved
            shapes to create a sense of movement. Each section feels like a
            “moment” rather than a rigid grid.
          </p>

          <Screenshot label="Layout screenshot goes here" />
        </div>

        {/* Interaction */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Interaction & Motion</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            Hover effects are subtle but expressive — slight rotations, gentle
            scaling, and soft shadows. These interactions reinforce the playful
            brand without overwhelming the user.
          </p>

          <Screenshot label="Interaction screenshot goes here" />
        </div>

      </div>
    </section>
  );
}