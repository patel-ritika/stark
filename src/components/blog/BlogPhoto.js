import React,{useState} from 'react';
import "../../asset/styles/blog/blogphoto.css";
import img1 from "../../asset/images/blog1.jpeg"; // Replace with actual paths
import img2 from "../../asset/images/blog2.webp";
import img3 from "../../asset/images/blog3.webp";
import img4 from "../../asset/images/blog4.webp";
import img5 from "../../asset/images/blog5.webp";
import img6 from "../../asset/images/blog6.jpeg";
import img7 from "../../asset/images/blog7.webp";
import img8 from "../../asset/images/blog8.jpeg";
import img9 from "../../asset/images/blog9.webp";
import img10 from "../../asset/images/blog10.webp";
import img11 from "../../asset/images/blog11.webp";
import img12 from "../../asset/images/blog12.png";
import img13 from "../../asset/images/blog13.webp";
import img14 from "../../asset/images/blog14.webp";
import img15 from "../../asset/images/blog15.webp";
import img16 from "../../asset/images/blog16.webp";
import img17 from "../../asset/images/blog17.webp";
import img18 from "../../asset/images/blog18.jpeg";
import img19 from "../../asset/images/blog19.webp";
import img20 from "../../asset/images/blog20.png";
import img21 from "../../asset/images/blog21.png";
import img22 from "../../asset/images/blog22.webp";
import img23 from "../../asset/images/blog23.webp";
import img24 from "../../asset/images/blog24.jpg";
import img25 from "../../asset/images/blog25.webp";
import img26 from "../../asset/images/blog26.webp";
import img27 from "../../asset/images/blog27.webp";
import img28 from "../../asset/images/blog28.webp";
import img29 from "../../asset/images/blog29.webp";
import img30 from "../../asset/images/blog30.webp";
import img31 from "../../asset/images/blog31.webp";
import img32 from "../../asset/images/blog32.webp";
import img33 from "../../asset/images/blog33.webp";
import img34 from "../../asset/images/blog34.webp";
import img35 from "../../asset/images/blog35.png";
import img36 from "../../asset/images/blog36.png";
import img37 from "../../asset/images/blog37.png";
import img38 from "../../asset/images/blog38.png";
import img39 from "../../asset/images/blog39.png";
import img40 from "../../asset/images/blog40.png";
import img41 from "../../asset/images/blog41.png";
import img42 from "../../asset/images/blog42.png";
import img43 from "../../asset/images/blog43.png";
import img44 from "../../asset/images/blog44.png";
import img45 from "../../asset/images/blog45.png";
import img46 from "../../asset/images/blog46.jpg";
import img47 from "../../asset/images/blog47.png";
import img48 from "../../asset/images/blog48.jpeg";
import img49 from "../../asset/images/blog49.png";
import img50 from "../../asset/images/blog50.png";

const BlogPhoto = () => {
    const data = {
        "Latest and Greatest": [
          { img: img1, title: "Introducing the next-generation Stark platform and free starter plan for teams", desc: "We're taking the next leap for our platfprm with a brand-new free plan for teams to get started with Continuous Accessibility monitoring from design to code, the next version of our end-to-end scanning engine with real-time reports, brand-new roles and permissions for large organizations, and so much more.", readMore: "Read more" },
          { img: img2, title: "The Accessibility Metrics Scorecard template for scalable business impact", desc: "Accessibility is a human right. And it's also a key driver for busines success and innovation if managed proactively alongside other critical performance indicators. This template provides a starting point on which metrics to measure.", readMore: "Read more" },
          { img: img3, title: "Introducing all-new Language Analysis and auto-fill for Accessibility Notes", desc: "These brand-new language tools empower designers and writers to create more inclusive content ensuring that text is easy to read and accessible to anyone.", readMore: "Read more" },
          { img: img4, title: "How to use your design system colors to fix accesssibility issues with Stark in Figma and the browser", desc: "Learn how Stark connects to your design system in design and code to help you find and fix contrast issues in record time both in Figma and your browser.", readMore: "Read more" },
          { img: img5, title: "All-new Figma checklist widget,Design system integrations, iframe support in WCAG Audit, and major performance improvements", desc: "Our August release is all about quality of life improvements across all part of the Stark platform with a focus on speed, accuracy, and enhanced user experience.Check out the expanded CI/CD integrations as well as the all-new WCAG checklist for Figma users, and so much more.", readMore: "Read more" },
          { img: img6, title: "How legal teams can navigate accessibility compliance with Stark", desc: "This guide describes in depth how legal teams can prosctively monitor and manage a company's digital accessibility posture in-line with the lastest regulatory requirements in Europe, Canada, and the U.S.", readMore: "Read more" },
          { img: img7, title: "Navigating compliance with the European Accessibility Act(EAA)", desc: "What is the European Accessibility Act? Who does it apply to and when is the deadline for compliance? How can your company ensure compliance with the EAA? In this article we answer these and many additional questions as well as outline how Stark empowers your organization to set up a continuous, scalable, and proactive digital accessibility workflow.", readMore: "Read more" },
          { img: img8, title: "Understanding the differences between Section 508 and WCAG compliance", desc: "What does Section 508 mean? How is it connected to the WCAG standard? And how can your company ensure compliance with both? This article answer these and many additional questions as well as outlines how Stark empowers your organization to set up a sustainable, scalable, and proactive digital accessibility workflow.", readMore: "Read more" },
          { img: img9, title: "Automatic Monitoring, Azure DevOps integration, Bitbucket, GitLab and CI/CD support", desc: "We're massively expanding the number of integrations into developer environments and bringing Stark's industry-leading accessibility scanning into CI/CD pipelines for real-time accessibility testing in your automated QA processes.", readMore: "Read more" },
          { img: img10, title: "An all-new beautiful design, smart suggestions from your design system, new annotation tools, and so much more.", desc: "Stark in Figma and your browser just got a brand-new look and feel that's faster and more intuitive than ever plus a host of new features for design systems and developers.", readMore: "Read more" },
          { img: img11, title: "A new player has joined - How creators can make independent games more accessible for all", desc: "Michael Fouquet, Co-Founder and chief Technology Officer at Stark, shares his observations on the latest developments in the gaming market, and suggestions on how gaming studios can make their games accessible for every player.", readMore: "Read more" },
          { img: img12, title: "Introducing Sidekick V2 and Stark Premium to boost your design and development workflow", desc: "Sidekick version 2 is better, faster, and more accurate than ever before. And with the brand-new Stark Premium plan you can give your accessibility workflow the boost it deserves.", readMore: "Read more" },
          { img: img13, title: "Announcing automated scanning of authenticated live URLs", desc: "We're introducing one of the most requested features since the introduction of live URL scans on the Stark platform. Now you caan set up continuous real-time accessibility scans of public and private URLs right in Stark with a simple click.", readMore: "Read more" },
          { img: img14, title: "Stark White Paper: Managing a modern accessibility posture and growing accessibility maturity at any scale", desc: "This industry white paper is a guide on how to manage a modern accessibility posture and grow accessibility maturity at any scale and to deliver results for both the business and customers alike.", readMore: "Read more" },
          { img: img15, title: "Introducing filters and WCAG conformance level settings for real-time reports in Stark", desc: "Our February release brings brand-new filtering and WCAG conformance level settings as well as major design, usability, and performnce updated to every part of the Stark platform.", readMore: "Read more" },
          { img: img16, title: "Over 100 simplified and actionable explanations of every WCAG 2.2 criteria", desc: "Understanding the WCAG can feel daunting. To help, we went ahead and wrote summaries for each every criteria. Yep. All of them. Let's talk about how to use them and why we did it..", readMore: "Read more" },
          { img: img17, title: "Introducing Project Management Integrations, all-new Annotations, and major Sidekick updates", desc: "Our January 2024 release is adding one of the most requested features to the Stark platform: project management system integration to create tickets for accessibility issues right from Stark. And there's many more exciting updates for you and your team to check out!", readMore: "Read more" },
          { img: img18, title: "Customer Story: Harlow", desc: "How an indie-game studio created an award-winning, accessible video game with Stark", readMore: "Read more" },
          { img: img19, title: "The 2023 Accessibility Year in Review", desc: "2023 markd another year of continuous progress in the world of digital accessibility, a journey empowered by the transformative impact of AI. Our report celebrates the innovation and impact of inclusive, accessible design across industries.", readMore: "Read more" },
          { img: img20, title: "Understanding the new WCAG 2.2 criteria", desc: "Breaking down the 9 new WCAG 2.2 criteria, what they mean for your team and your products, and how you can seamlessly integrate them into your process.", readMore: "Read more" },
          { img: img21, title: "Making every letter count", desc: "Use this free Figma resource to check the typefaces you use for ambiguous letter shapes so that your brand, marketing and product interfaces are inclusive and accessible for everyone.", readMore: "Read more" },
          { img: img22, title: "Introducing live URL scanning, and brand-new team admin controls", desc: "Our November release is filled wiith major updates: We're adding live URL scanning to the Stark platform to provide a full end-to-end accessibility from design and code to the live product. Plus we're adding all-new admin controls to manage team and enterprise accounts.", readMore: "Read more" },
          { img: img23, title: "Introducing Stark's Accessibiility Compliance Center", desc: "The October release is our biggest release yet. We're adding a whole new part to the Stark platform: Compliance Center empowers companies of all sizes to manage accesibility with the same rigor and effectiveness as privacy and security. Plus, we're shipping 20+ improvements and updates to all parts of the Stark platform.", readMore: "Read more" },
          { img: img24, title: "Hello world: Meet Stark for Developers Beta.", desc: "A jam-packed announcement of the best end-to-end accessibility solution for software teams including Stark for GitHub enabling continuous sacnning of code repositories in the same Stark project as design files.", readMore: "Read more" },
          { img: img25, title: "Expediting handoff with annotations and a smarter Sidekick", desc: "All of these new updates were inspired directly by Community feedback-thanks, folks!", readMore: "Read more" },
          { img: img26, title: "Celebrating the 33rd Anniversary of the ADA-and yet, there's still so much work to do", desc: "There were 2 major milestones in 1990: the ADA was passed, and the first web browser launched.", readMore: "Read more" },
          { img: img27, title: "Introducing Stark Web App with Projects, Reports, and Insights", desc: "We're giving you more ways to centralize your design and developer work and streamline how you build with digital accessibility inn mind", readMore: "Read more" },
          { img: img28, title: "Raising the bar for digital accessibility", desc: "Our CEO and Co-Founder Cat Noone on the concept of Continuous Accessibility, how it's transformative for digital accessibility, and why it's at the center of Stark's roadmap.", readMore: "Read more" },
          { img: img29, title: "Making Waves: Sound Design in modern day software", desc: "Experts in sound design share insights about how to design better, more inclusive products with sound in mind", readMore: "Read more" },
          { img: img30, title: "Stark named to the Fast Company World Changing Ideas List", desc: "We're thrilled to be named in not just one but four categories of Fast Company's 2023 list and want to celebrate this with you.", readMore: "Read more" },
          { img: img31, title: "Meet Sidekick, your new AI-powered accessibility assistant in Stark", desc: "With Sidekick, accessible design just got ten times faster", readMore: "Read more" },
          { img: img32, title: "All-new Focus Order, Alt-Text, and Typography tools", desc: "Check out the big new updates we made to our Focus Order, Alt-Text, and Typography tools in Stark for Figma, Sketch, and Browser Extensions.", readMore: "Read more" },
          { img: img33, title: "Say hello to Stark for Firefox", desc: "With Stark for Firefox we're reaching 100% desktop browser coverage and bringing all Stark tools to this popular browser to make testing for digital accessibility issues better than ever.", readMore: "Read more" },
          { img: img34, title: "Introducing more Vision Simulator scenarios", desc: "Today, we're adding five new simulations to Stark's Vision Simulator to help you design with more intention by giving you a peek at other people;s needs.", readMore: "Read more" },
          { img: img35, title: "Introducing WCAG Audit and Report in Stark", desc: "Run accessibility compliance scans on any website or web app, as often as needed, and generate easy-to-read downloadable reports in an instant with our beta release of Stark's brand-new WCAG Audit tool.", readMore: "Read more" },
          { img: img36, title: "Announcing Stark's APCS beta", desc: "Introducing a new way to check contrast with our first beta release of APCA in Stark for Figma, Sketch, and our browser extensions.", readMore: "Read more" },
          { img: img37, title: "Introducing the Stark for Mac Library", desc: "We've brought the Stark Library to Stark for Mac, so you can research, browser and learn about all things accessibility and inclusive design without leaving th app.", readMore: "Read more" },
          { img: img38, title: "How we're evolving Stark's color palette to scale", desc: "Our design team set out to create a single color palette to use across the Stark experience-everything from illustrations to buttons.", readMore: "Read more" },
          { img: img39, title: "Introducing the all-new Color Picker in Stark's Contrast Checker", desc: "We're rolling out a new, more advanced Contrast Checker to Stark for Figma and Sketch-complete with advanced layer detection and the option to check all colors on a page and from your design system.", readMore: "Read more" },
          { img: img40, title: "Stark for Safari and Stark for Arc are here", desc: "Check your websites, web apps, and online shops for accessibility issues with our newest browser extensions for Safari and Arc.", readMore: "Read more" },
          { img: img41, title: "Stark's developers share their favorite tips for writing accessibility apps with Apple's SwiftUI", desc: "Learn how we used SwiftUI to make sure Stark for Mac was accessible from the start.", readMore: "Read more" },
          { img: img42, title: "Introducing Stark for Education and free trials for Teams", desc: "Today, we're giving more people than ever access to Stark, and we can't wait to see what they build.", readMore: "Read more" },
          { img: img43, title: "Introducing Stark for Mac, a new account dashboard, and a faster way to set up Team subscriptions", desc: "Explore Stark's ew features and learn how to use them to streamline your accessibility workflow.", readMore: "Read more" },
          { img: img44, title: "Keep your team on track with Accessibility Checklists for Figma and FigJam", desc: "Today, we're bringing our beloved accessibility checklist widget in FigJam to Figma, streamlining your team's workflow from ideation to production.", readMore: "Read more" },
          { img: img45, title: "Supercharge Accessibility with the all-new Stark Suite", desc: "Meet the new Stark Suite and get started with a Free, Pro, or Team account today.", readMore: "Read more" },
          { img: img46, title: "Welcome to the Stark side:Dark Mode is here", desc: "Designed to work your OS preferences and your workflow, try the new Dark Mode in Stark for Figma, Sketch, and Chrome.", readMore: "Read more" },
          { img: img47, title: "Introducing an all-new Stark for Figma, Adobe XD, and Chrome", desc: "Our biggest redesign to date introduces an all-new Stark that gives you a simpler, faster, and effortless experience.", readMore: "Read more" },
          { img: img48, title: "Juneteenth 2022: What you didn't learn in history class", desc: "If you never learned about juneteenth in school, you're not alone.", readMore: "Read more" },
          { img: img49, title: "How we updated our Vision Simulator with the help of our community", desc: "Vision simulations are never perfect.But here at Stark, we're always striving to give you the best experience.", readMore: "Read more" },
          { img: img50, title: "Julie Chabin on Product Hunt's maker and community mindset", desc: "Learn all about Product Hunt's design process, culture, approach to accessibility, and more with design leader Julie Chabin!", readMore: "Read more" },
          // Add more items
        ],
        Announcements: [
          { img: img1, title: "Introducing the next-generation Stark platform and free starter plan for teams", desc: "We're taking the next leap for our platfprm with a brand-new free plan for teams to get started with Continuous Accessibility monitoring from design to code, the next version of our end-to-end scanning engine with real-time reports, brand-new roles and permissions for large organizations, and so much more.", readMore: "Read more" },
          { img: img3, title: "Introducing all-new Language Analysis and auto-fill for Accessibility Notes", desc: "These brand-new language tools empower designers and writers to create more inclusive content ensuring that text is easy to read and accessible to anyone.", readMore: "Read more" },
          { img: img5, title: "All-new Figma checklist widget,Design system integrations, iframe support in WCAG Audit, and major performance improvements", desc: "Our August release is all about quality of life improvements across all part of the Stark platform with a focus on speed, accuracy, and enhanced user experience.Check out the expanded CI/CD integrations as well as the all-new WCAG checklist for Figma users, and so much more.", readMore: "Read more" },
          { img: img7, title: "Navigating compliance with the European Accessibility Act(EAA)", desc: "What is the European Accessibility Act? Who does it apply to and when is the deadline for compliance? How can your company ensure compliance with the EAA? In this article we answer these and many additional questions as well as outline how Stark empowers your organization to set up a continuous, scalable, and proactive digital accessibility workflow.", readMore: "Read more" },
          { img: img9, title: "Automatic Monitoring, Azure DevOps integration, Bitbucket, GitLab and CI/CD support", desc: "We're massively expanding the number of integrations into developer environments and bringing Stark's industry-leading accessibility scanning into CI/CD pipelines for real-time accessibility testing in your automated QA processes.", readMore: "Read more" },
          // Add more items
        ],
        Community: [
          { img: img11, title: "A new player has joined - How creators can make independent games more accessible for all", desc: "Michael Fouquet, Co-Founder and chief Technology Officer at Stark, shares his observations on the latest developments in the gaming market, and suggestions on how gaming studios can make their games accessible for every player.", readMore: "Read more" },
          { img: img12, title: "Introducing Sidekick V2 and Stark Premium to boost your design and development workflow", desc: "Sidekick version 2 is better, faster, and more accurate than ever before. And with the brand-new Stark Premium plan you can give your accessibility workflow the boost it deserves.", readMore: "Read more" },
          { img: img13, title: "Announcing automated scanning of authenticated live URLs", desc: "We're introducing one of the most requested features since the introduction of live URL scans on the Stark platform. Now you caan set up continuous real-time accessibility scans of public and private URLs right in Stark with a simple click.", readMore: "Read more" },
          { img: img14, title: "Stark White Paper: Managing a modern accessibility posture and growing accessibility maturity at any scale", desc: "This industry white paper is a guide on how to manage a modern accessibility posture and grow accessibility maturity at any scale and to deliver results for both the business and customers alike.", readMore: "Read more" },
          { img: img15, title: "Introducing filters and WCAG conformance level settings for real-time reports in Stark", desc: "Our February release brings brand-new filtering and WCAG conformance level settings as well as major design, usability, and performnce updated to every part of the Stark platform.", readMore: "Read more" },
        ],
        Guides: [
          { img: img16, title: "Over 100 simplified and actionable explanations of every WCAG 2.2 criteria", desc: "Understanding the WCAG can feel daunting. To help, we went ahead and wrote summaries for each every criteria. Yep. All of them. Let's talk about how to use them and why we did it..", readMore: "Read more" },
          { img: img17, title: "Introducing Project Management Integrations, all-new Annotations, and major Sidekick updates", desc: "Our January 2024 release is adding one of the most requested features to the Stark platform: project management system integration to create tickets for accessibility issues right from Stark. And there's many more exciting updates for you and your team to check out!", readMore: "Read more" },
          { img: img18, title: "Customer Story: Harlow", desc: "How an indie-game studio created an award-winning, accessible video game with Stark", readMore: "Read more" },
          { img: img19, title: "The 2023 Accessibility Year in Review", desc: "2023 markd another year of continuous progress in the world of digital accessibility, a journey empowered by the transformative impact of AI. Our report celebrates the innovation and impact of inclusive, accessible design across industries.", readMore: "Read more" },
          { img: img20, title: "Understanding the new WCAG 2.2 criteria", desc: "Breaking down the 9 new WCAG 2.2 criteria, what they mean for your team and your products, and how you can seamlessly integrate them into your process.", readMore: "Read more" },
        ],
        Product: [
          { img: img21, title: "Making every letter count", desc: "Use this free Figma resource to check the typefaces you use for ambiguous letter shapes so that your brand, marketing and product interfaces are inclusive and accessible for everyone.", readMore: "Read more" },
          { img: img22, title: "Introducing live URL scanning, and brand-new team admin controls", desc: "Our November release is filled wiith major updates: We're adding live URL scanning to the Stark platform to provide a full end-to-end accessibility from design and code to the live product. Plus we're adding all-new admin controls to manage team and enterprise accounts.", readMore: "Read more" },
          { img: img23, title: "Introducing Stark's Accessibiility Compliance Center", desc: "The October release is our biggest release yet. We're adding a whole new part to the Stark platform: Compliance Center empowers companies of all sizes to manage accesibility with the same rigor and effectiveness as privacy and security. Plus, we're shipping 20+ improvements and updates to all parts of the Stark platform.", readMore: "Read more" },
          { img: img24, title: "Hello world: Meet Stark for Developers Beta.", desc: "A jam-packed announcement of the best end-to-end accessibility solution for software teams including Stark for GitHub enabling continuous sacnning of code repositories in the same Stark project as design files.", readMore: "Read more" },
          { img: img25, title: "Expediting handoff with annotations and a smarter Sidekick", desc: "All of these new updates were inspired directly by Community feedback-thanks, folks!", readMore: "Read more" },
        ],
        Interviews: [
          { img: img26, title: "Celebrating the 33rd Anniversary of the ADA-and yet, there's still so much work to do", desc: "There were 2 major milestones in 1990: the ADA was passed, and the first web browser launched.", readMore: "Read more" },
          { img: img27, title: "Introducing Stark Web App with Projects, Reports, and Insights", desc: "We're giving you more ways to centralize your design and developer work and streamline how you build with digital accessibility inn mind", readMore: "Read more" },
          { img: img28, title: "Raising the bar for digital accessibility", desc: "Our CEO and Co-Founder Cat Noone on the concept of Continuous Accessibility, how it's transformative for digital accessibility, and why it's at the center of Stark's roadmap.", readMore: "Read more" },
          { img: img29, title: "Making Waves: Sound Design in modern day software", desc: "Experts in sound design share insights about how to design better, more inclusive products with sound in mind", readMore: "Read more" },
          { img: img30, title: "Stark named to the Fast Company World Changing Ideas List", desc: "We're thrilled to be named in not just one but four categories of Fast Company's 2023 list and want to celebrate this with you.", readMore: "Read more" },
        ],
        Studies: [
          { img: img31, title: "Meet Sidekick, your new AI-powered accessibility assistant in Stark", desc: "With Sidekick, accessible design just got ten times faster", readMore: "Read more" },
          { img: img32, title: "All-new Focus Order, Alt-Text, and Typography tools", desc: "Check out the big new updates we made to our Focus Order, Alt-Text, and Typography tools in Stark for Figma, Sketch, and Browser Extensions.", readMore: "Read more" },
          { img: img33, title: "Say hello to Stark for Firefox", desc: "With Stark for Firefox we're reaching 100% desktop browser coverage and bringing all Stark tools to this popular browser to make testing for digital accessibility issues better than ever.", readMore: "Read more" },
          { img: img34, title: "Introducing more Vision Simulator scenarios", desc: "Today, we're adding five new simulations to Stark's Vision Simulator to help you design with more intention by giving you a peek at other people;s needs.", readMore: "Read more" },
          { img: img35, title: "Introducing WCAG Audit and Report in Stark", desc: "Run accessibility compliance scans on any website or web app, as often as needed, and generate easy-to-read downloadable reports in an instant with our beta release of Stark's brand-new WCAG Audit tool.", readMore: "Read more" },
        ],
        Engineering: [
          { img: img36, title: "Announcing Stark's APCS beta", desc: "Introducing a new way to check contrast with our first beta release of APCA in Stark for Figma, Sketch, and our browser extensions.", readMore: "Read more" },
          { img: img37, title: "Introducing the Stark for Mac Library", desc: "We've brought the Stark Library to Stark for Mac, so you can research, browser and learn about all things accessibility and inclusive design without leaving th app.", readMore: "Read more" },
          { img: img38, title: "How we're evolving Stark's color palette to scale", desc: "Our design team set out to create a single color palette to use across the Stark experience-everything from illustrations to buttons.", readMore: "Read more" },
          { img: img39, title: "Introducing the all-new Color Picker in Stark's Contrast Checker", desc: "We're rolling out a new, more advanced Contrast Checker to Stark for Figma and Sketch-complete with advanced layer detection and the option to check all colors on a page and from your design system.", readMore: "Read more" },
          { img: img40, title: "Stark for Safari and Stark for Arc are here", desc: "Check your websites, web apps, and online shops for accessibility issues with our newest browser extensions for Safari and Arc.", readMore: "Read more" },
        ] 
        // Add other categories similarly
      };
    
      const categories = Object.keys(data);
      const [activeCategory, setActiveCategory] = useState("Latest and Greatest");

  return (
    <div className="blog-photo-container">
      {/* Left Side List */}
      <div className="blog_photo_left-list">
        {categories.map((category) => (
          <div
            key={category}
            className={`blog_photo_list-item ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Right Side Content */}
      <div className="blog_photo_right-content">
        {data[activeCategory].map((item, index) => (
          <div key={index} className="blog_photo_content-item">
            <img src={item.img} alt={item.title} className="blog_photo_content-image" />
            <h1 className="blog_photo_content-title">{item.title}</h1>
            <h4 className="blog_photo_content-description">{item.desc}</h4>
            <h5 className="blog_photo_content-read-more">{item.readMore}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPhoto;
