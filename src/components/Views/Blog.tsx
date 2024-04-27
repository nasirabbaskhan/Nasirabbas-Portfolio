import { BlogType } from "@/lib/type";
import { client } from "../../../sanity/lib/client";
import BlogItem from "../BlogItem";
const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="blog"]{topic,commentator,comment,day,image}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function Blog() {
  const data: BlogType[] = await fetchingData();
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        My <span className="text-yellow-400">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[85%] mx-auto">
        {data.map((item, index) => {
          return (
            <span key={index}>
              <BlogItem
                date={item.day}
                comments={item.comment}
                commentator={item.commentator}
                topic={item.topic}
                image={item.image}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
