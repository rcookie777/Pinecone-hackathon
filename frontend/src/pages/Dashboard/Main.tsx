import ChatBox from "../../components/ChatBox";
import FileInput from "../../components/FileInput";

const Main = () => {
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 grid-row-3 gap-8">
          <div className="col-span-5 xl:col-span-3 row-span-3">
            <ChatBox />
          </div>
          <div className="col-span-5 xl:col-span-2">
            <FileInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
