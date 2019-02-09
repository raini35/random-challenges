from itertools import tee

def splitFile(filename, NUM_OF_FILES):
    try:
        count = 0;
        with open(filename) as fin:
            print("STARTING PROGRAM")
            print(">>COUNTING RECORDS")
            countIter, fileIter = tee(fin)

            for i in countIter:
                count = count + 1

            NUM_OF_LINES = 1.0/NUM_OF_FILES*count
            FILE_NUM = 0
            end = int(round((FILE_NUM + 1)*NUM_OF_LINES))

            print(end)
            print(count)


            print(">>FINISHED COUNTING")
            print(">>BUILDING SMALL FILES")
            fout = open("process.txt","wb")
            print('>>>>--------')
            for i,line in enumerate(fileIter):
                fout.write(line)
                if i+1 == end or i + 1 == count:
                    fout.close()
                    if i+1 != count:
                        percentDone = 1.0 * end / count * 100
                        print(">>>>FINISHED WRITING: process%d.txt %.2f/100.00"%(FILE_NUM, percentDone))
                        FILE_NUM = FILE_NUM + 1
                        end = int(round((FILE_NUM + 1)*NUM_OF_LINES))
                        fout = open("process%d.txt"%(FILE_NUM),"wb")
                        print('--------')
            print(">>>>COMPLETE")
            fout.close()
        return True
    except:
        print("ERROR: Something happened")
        return False
