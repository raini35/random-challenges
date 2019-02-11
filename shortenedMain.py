import time
import re
import sys

start_time = time.time()
# pattern = re.compile(r'"([A-Z]*)\s*,*\s*[0-9]*([A-Z]*).*"')
# print('ORIGINAL %s' %line)
# pattern = re.compile(r'"([A-Z]*),*\s*([A-Z]*\.*[A-Z]*\.*).*"')

# newLine = pattern.sub('\\1 \\2', line)

# headerAndFiles = splitFile(filename, header, NUM_OF_FILES)
# print(headerAndFiles)
#
# for file_name in headerAndFiles[1]:
    # processFile(file_name)

# import multiprocessing

# from split_file import splitFile

# NUM_OF_FILES = multiprocessing.cpu_count()
# header = True

def clean_up(line, pattern):
    partToEdit = pattern.search(line).group(0)
    edited = partToEdit.replace(',', '').replace('"', '')
    return pattern.sub(edited, line)

def processFile(file):
    print('STARTED PROCESSING %s' %file)
    output = []
    fileInfo = {}
    with open(file) as fin:
        pattern = re.compile(r'"(.*)"')
        header = fin.next()
        output.append(header.strip().split(','))
        print(header)

        for i,line in enumerate(fin):
            original = line

            if pattern.search(line):
                line = clean_up(line, pattern)

            arr = line.strip().split(',')

            drug = arr[3]
            price = arr[4]

            if(drug in fileInfo):
                fileInfo[drug][0] = fileInfo[drug][0] + 1
                fileInfo[drug][1] = fileInfo[drug][0] + float(price)
            else:
                fileInfo[drug] = [1, float(price)]
    fin.close()
    print('FINISHED PROCESSING %s' %file)
    output.append(fileInfo)
    return output

def writeOutput(file, header, info):
    file.write("%s,%s,%s\n" %(header[3], 'num_prescriber','total_cost'))

    for key in info.keys():
        patientCount = info[key][0]
        totalPrice = info[key][1]
        file.write("%s,%d,%.2f\n" %(key, patientCount, totalPrice))

    return

if __name__ == "__main__":
    # filename = sys.argv[1]
    filename = 'de_cc_data.txt'

    output = processFile(filename)

    header = output[0]
    info = output[1]
    # outputFile = open(sys.argv[2], 'w+')
    outputFile = open('./output/top_cost_drug.txt', 'w+')

    writeOutput(outputFile, header, info)

    outputFile.close()

    print("--- %s seconds ---" % (time.time() - start_time))
