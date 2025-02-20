"use client";

import FairForAll from "@/components/client/Fair-for-all";
import CategoryGrid from "@/components/client/category-grid";
import FreeShipping from "@/components/client/free-shipping";

export default function Home() {
  return (
    <div className="home-outer">
      {/* Category Grid */}
      <CategoryGrid />

      {/* Read Our Transparency Report */}
      <div className="rot-outer grid--center site-mb">
        {/* Left */}
        <article className="rot-left">
          <div className="site-paragraph rot-left-article">
            <h3>Read Our Transparency Report</h3>
            <p>
              Learn more about how Taza Direct Trade breaks the (chocolate)
              mold!
            </p>
            <a className="rot-left-a" href="#readmore">
              Read More
            </a>
          </div>
        </article>
        {/* Right */}
        <div
          className="rot-right"
          style={{
            // backgroundImage: `url(${"/images/home_page_feature_module_2.webp"})`,
            backgroundImage: `url(${"https://raw.githubusercontent.com/AshishKohad27/Taza-Chocolate/main/public/Images/home_page_feature_module_2.webp"})`,
          }}
        ></div>
      </div>

      {/* Free Shipping */}
      <FreeShipping />
      {/* Fair For All */}
      <FairForAll />
    </div>
  );
}
