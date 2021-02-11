import Image from "next/image";
import { ProjectCard, Timeline } from "src/components";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-4 py-6 mx-auto">
          <div className="w-full flex justify-start lg:justify-start ml-3 mt-8">
            <Image
              src="/saol-lightfg.svg"
              alt="nonissue logo"
              width={75 * 1.5}
              height={28 * 1.5}
              // className="mx-4 pl-4"
              // className="opacity-100 object-contain h-full max-h-12 p-1 lg:p-0 lg:max-h-8 lg:mx-4 hover:opacity-90 cursor-pointer transition-opacity duration-500 -ml-4"
            />
          </div>

          <h2 className="tracking-widest text-xl title-font opacity-75 text-white text-left lg:px-0 font-normal uppercase px-4 pl-0 mx-4 my-8">
            Projects
          </h2>

          <div className="flex flex-wrap -m-4 px-4">
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="/project-thumbs/1.jpg"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="/project-thumbs/2.jpg"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="/project-thumbs/3.jpg"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="/project-thumbs/4.jpg"
            />
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="/project-thumbs/1.jpg"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="/project-thumbs/2.jpg"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="/project-thumbs/3.jpg"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="/project-thumbs/4.jpg"
            />
          </div>
        </div>
      </section>

      <div className="container px-4 py-6 mx-auto bg-black">
        <h2 className="tracking-widest text-xl title-font opacity-75 text-white text-center lg:px-0 font-normal uppercase px-4 mx-4 my-8">
          Activity
        </h2>

        <Timeline />
      </div>
    </>
  );
};

export default Index;
