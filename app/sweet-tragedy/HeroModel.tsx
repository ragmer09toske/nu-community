import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
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
        thumbnailSrc="/sweet-tragedy-banner.PNG"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
