import HeroVideoDialog from "@/components/ui/hero-video-dialog";

<<<<<<< HEAD
export function HeroVideoBanner() {
=======
export function HeroVideoDialogBanner() {
>>>>>>> c22c74dc9dd2eff9e834ad69d8f402e9d1a190b7
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="#"
        thumbnailSrc="/sweet-tragedy-banner.PNG"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="#"
        thumbnailSrc="/blog/sweet-tragedy-banner.PNG"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
