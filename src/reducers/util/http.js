import { SubmissionError } from 'redux-form';
import { saveAs } from "file-saver";

export function handleFetchResponse(res) {
  if (res.status === 400) {
    return res.json().then(({ field, error }) => {
      throw new SubmissionError({ [field]: error })
    });
  }
  return res.json();
}

export function handleCSVResponce(fileName){
  return (res) => {
    res.text().then(text => {
      let csv = new Blob([text], { type: "text/csv;charset=utf-8" });
      return saveAs(csv, fileName);
    });
  }

}