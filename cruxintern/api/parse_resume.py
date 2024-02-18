from pyresparser import ResumeParser
data = ResumeParser("sajid.pdf").get_extracted_data()


def get_resume_data(file):
    data = ResumeParser(file).get_extracted_data()
    return data
