#ifndef __HOST_DOC_H_FILE__
#define __HOST_DOC_H_FILE__

#define __use_local__ __attribute__((weak))

#ifdef __linux__
#define GREEN_C "\033[0;32m"
#define RED_C "\033[0;31m"
#define NC "\033[0m"
#endif /* __linux__ */

#include <iostream>
#include <filesystem>

using namespace std;

namespace fileSys
{
  /**
   * readDirRecursive - Reads a dir recursievely listing all files
   * @pathName: dir path name
   */
  __use_local__ void readDirRecursive(string pathName)
  {
    using namespace std::filesystem;
    path dirName(pathName);

    for (const auto &p : recursive_directory_iterator(dirName))
    {
      try
      {
        if (is_directory(p))
          readDirRecursive(p.path());
        else
          cout << p.path() << endl;
      }
      catch (filesystem_error &e)
      {
        cout << e.what() << endl;
      }
    }
  }

  /**
   * Move file from src to dst
   * @param __src: sorce dirname
   * @param __dst: destination dirname
   */
  __use_local__ void mv(string __src, string __dst)
  {
    using namespace std::filesystem;
    path src(__src);
    path dst(__dst);

    try
    {
      rename(src, dst);
    }
    catch (filesystem_error &e)
    {
      cout << e.what() << endl;
    }
  }

  /**
   * Copy file from src to dst
   * @param __src: sorce dirname
   * @param __dst: destination dirname
   */
  __use_local__ void cp(string __src, string __dst)
  {
    using namespace std::filesystem;
    path src(__src);
    path dst(__dst);

    try
    {
      copy(src, dst);
    }
    catch (filesystem_error &e)
    {
      cout << e.what() << endl;
    }
  }
}

namespace handleFiles
{
  class DataFile
  {
  public:
    DataFile(string inPath, string outPath)
    {
      generateData();
    };

  private:
    /**
     * generateData - Calls all the methods involved in generating metadata
     * for the html files
     */
    void generateData()
    {
    }
  };
}

#endif /*__HOST_DOC_H_FILE__*/
