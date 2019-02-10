import time
import re
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
    object = []
    output = {}
    with open(file) as fin:
        pattern = re.compile(r'"(.*)"')
        header = fin.next()
        object.append(header.strip().split(','))

        for i,line in enumerate(fin):
            original = line

            if pattern.search(line):
                line = clean_up(line, pattern)

            arr = line.strip().split(',')

            drug = arr[3]
            price = arr[4]

            if(drug in output):
                output[drug][0] = output[drug][0] + 1
                output[drug][1] = output[drug][0] + float(price)
            else:
                output[drug] = [1, float(price)]
    fin.close()
    print('FINISHED PROCESSING %s' %file)
    object.append(output)
    return object

if __name__ == "__main__":
    filename = 'de_cc_data.txt'

    output = processFile(filename)

    header = output[0]
    info = output[1]

    outputFile = open('top_cost_drug.txt', 'w')

    outputFile.write("%s,%s,%s\n" %(header[3], 'num_prescriber','total_cost'))

    for key in info.keys():
        patientCount = info[key][0]
        totalPrice = info[key][1]
        outputFile.write("%s,%d,%.2f\n" %(key, patientCount, totalPrice))

    outputFile.close()

    print("--- %s seconds ---" % (time.time() - start_time))
