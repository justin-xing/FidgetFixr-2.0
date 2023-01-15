from PyPDF2 import PdfReader

def readPdf(path):

    fileReader = PdfReader(path)
    pdfStr = ""

    for page in fileReader.pages:
        pdfStr += page.extract_text()
        pdfStr += "\n"

    return pdfStr

def extractConcepts(s):
    print(type(s))
    lines = s.split("\n")

    firstLines = []

    for i in range(len(lines)):
        if ":" in lines[i]:
            firstLines.append(i)

    concepts = {}

    for i in range(len(firstLines)):
        fl = lines[firstLines[i]].split(":")
        key = fl[0]
        value = fl[1]

        if i < len(firstLines) - 1:
            for j in range(firstLines[i]+1, firstLines[i+1]):
                value += lines[j]
        else:
            for j in range(firstLines[i]+1,len(lines)):
                value += lines[j]
        concepts[key] = value

    for c in concepts:
        print(c)
        print(concepts[c])
        print("\n")

def removeOthChars(s):
    bulletPoints = ["●","○","■","❖","➢","➔","◆","★","-"]
    for p in bulletPoints:
        s = s.replace("\n" + p," ")

    #Removes all instances of 1.,2.,3. etc. at the start of lines.
    for i in range(1,100):
        lstNum = "\n" + str(i) + "."
        if lstNum in s:
            s = s.replace(lstNum, " ")
        else:
            break
    
    #Removes all instances of a), b), c)... at the start of lines.
    for i in range(ord("a"),ord("z")+1):
        lstChar = "\n" + chr(i) + ")"
        if lstChar in s:
            s = s.replace(lstChar, " ")
        else:
            break

    #Removes all instances of A), B), C)... at the start of lines.
    for i in range(ord("A"),ord("Z")+1):
        lstChar = "\n" + chr(i) + ")"
        if lstChar in s:
            s = s.replace(lstChar, " ")
        else:
            break

    return s

s = readPdf("inputFiles/dh9-sample-input.pdf")
s = removeOthChars(s)
extractConcepts(s)