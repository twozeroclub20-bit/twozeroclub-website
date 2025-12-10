import Hero from "@/components/home/hero";
import Collection from "@/components/home/collection";
import Trending from "@/components/home/trending";
import ShopBy from "@/components/home/shopBy";
import SeenIn from "@/components/home/seenIn";
import Review from "@/components/home/review";
import Grid from "@/components/home/grid";
import Newsletter from "@/components/home/newsletter";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Collection></Collection>
      <Trending></Trending>
      <Grid></Grid>
      <ShopBy></ShopBy>
      <SeenIn></SeenIn>
      {/* <Review></Review> */}
      <Newsletter></Newsletter>
    </>
  );
}
