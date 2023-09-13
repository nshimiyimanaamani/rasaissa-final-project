import { FC } from "react";
import Button from "../components/Button";
import Modal from "../components/modals/Modal";

interface ResultModalProps {
  score: number;
  isOpen: boolean;
  handleClose: () => void;
}

const ResultModal: FC<ResultModalProps> = ({ score, isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2
            className="
                text-xl 
                font-semibold 
                leading-7 
                text-gray-900
              "
          >
            Results
          </h2>

          <p className="mt-1 leading-6 text-gray-600">Result based on your current answers</p>
          <h4
            className={`mt-4 text-center text-xl font-medium ${
              score < 3 ? "text-pink-700" : "text-green-600"
            }`}
          >
            You scored <span className="font-bold tracking-wide">{score}/7</span>
          </h4>
          <h3 className="text-center">
            This may mean that you have a more {score < 3 ? "negative" : "positive"} mindset
          </h3>
          {score < 3 ? (
            <div className="mt-5">
              <h4>You may find these resources are helpful</h4>
              <div className="mt-2">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a
                      href="https://icieducation.co.uk/blog/6-effective-strategies-to-stay-motivated-to-study/"
                      target="_blank"
                      className="text-sky-500 underline list-item list-disc list-inside"
                    >
                      Stay motivated to study
                    </a>
                    <a
                      href="https://www.ausmed.com/cpd/articles/how-to-handle-feedback-in-10-steps"
                      target="_blank"
                      className="text-sky-500 underline list-item list-disc list-inside"
                    >
                      Handling feedback
                    </a>
                    <a
                      href="https://www.lollydaskal.com/leadership/how-to-ask-for-help-when-you-need-it/"
                      target="_blank"
                      className="text-sky-500 underline list-item list-disc list-inside"
                    >
                      Ask for help when needed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-center">Good Job</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};
export default ResultModal;
