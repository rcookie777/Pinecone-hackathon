import { useState } from "react";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]) as any;

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveFile = (file: any) => {
    const updatedFileList = fileList.filter((f: any) => f !== file);
    setFileList(updatedFileList);
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      setFileList([...fileList, selectedFile]);
      setSelectedFile(null);
    }
  };

  return (
    <>
      {/* File upload */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">File upload</h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">Attach Doc</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
            <button
              className="bg-[#34D399] text-white font-bold py-1 px-3 rounded-lg mt-2"
              onClick={handleUploadFile}
            >
              Upload
            </button>
          </div>

          <div>
            <label className="mb-3 block text-black dark:text-white">Added Files</label>
            {fileList.map((file: any, index: number) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{file.name}</span>
                <button
                  className="bg-primary text-white font-bold py-1 px-3 rounded-lg"
                  onClick={() => handleRemoveFile(file)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileInput;
