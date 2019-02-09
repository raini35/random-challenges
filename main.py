import multiprocessing
from split_file import splitFile
NUM_OF_FILES = 24
filename = 'de_cc_data.txt'

# splitFile(filename, NUM_OF_FILES)

with open('process.txt') as fin:
    for i,line in enumerate(fin):
        arr = line.strip().split(',')
        if(len(arr) > 5):
            print(line)
