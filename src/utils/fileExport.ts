// 设置文件默认导出
import * as fs from 'fs'
import * as path from 'path'

/*
* 获取某个目录下面所有文件的默认导出
* @params filepath 需要遍历的文件路径
*/

export async function getAllFileExport(filepath:string, callback:Function) {
  // 根据文件路径返回文件列表
  // @ts-ignore
  const files: string[] = fs.readFileSync(filepath)
  // 遍历读取到的文件列表
  files.forEach((fileName) => {
    // 得到当前文件的绝对路径
    const absFilePath: string = path.join(filepath, fileName)
    const status: fs.Stats = fs.statSync(absFilePath)
    // 判断是否为文件
    const isFile = status.isFile()
    // 判断是否为文件夹
    const isDir = status.isDirectory()
    if (isFile) {
      const file = require(absFilePath)
      callback(file.default)
    }
    // 如果判断是文件夹就递归执行当前函数去读取里面的文件
    if (isDir) {
      getAllFileExport(absFilePath, callback)
    }
  })
}
