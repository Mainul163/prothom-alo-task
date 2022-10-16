import React from "react";
import DetailsPageTitle from "../../molecules/titles/DetailsPageTitle";
import Paragraph from "../../atoms/typography/paragraph";
const Details = ({ content }) => {
  console.log("--", content)
  return (
    <div className="story-details">
      <div className="story-title">
        <DetailsPageTitle headline={content.headline} subheadline={content.subheadline} />
      </div>
      <div className="story-image">
        <figure>
          <picture>
            <img
              src="https://dummyimage.com/964x540/000/fff"
              data-src="https://dummyimage.com/964x540/000/fff"
              type="image/webp"
              className="cover-image"
              alt="বিএনপির ময়মনসিংহ বিভাগীয় মহাসমাবেশ সফল করতে অনেকেই রাত থেকে সমাবেশস্থলে অবস্থান করছেন। শনিবার ভোরে পলিটেকনিক ইনস্টিটিউটের মাঠে"
              loading="lazy"
            />
          </picture>
        </figure>
      </div>
      <div className="story-description">
        <Paragraph>
          বিশ্বের বেশ কয়টি দেশে বর্তমানে প্রেসিডেন্ট পদে দায়িত্ব পালন করছেন
          নারীরা। তাঁদের অনেকেই আবার নিজ নিজ দেশের প্রথম নারী প্রেসিডেন্ট হয়ে
          ইতিহাস গড়েছেন। বিশ্বে বর্তমানে দায়িত্বরত নারী প্রেসিডেন্টদের সম্পর্কে
          জেনে নেওয়া যাক।
        </Paragraph>
      </div>
    </div>
  );
};

export default Details;
