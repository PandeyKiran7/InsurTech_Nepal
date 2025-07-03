import ChatGptFAQSection from '../FAQSection/ChatGptFAQSection';
import BigDataAnalyticsFAQSection from '../FAQSection/BigDataAnalyticsFAQSection ';
import ComputerVisionFAQSection from '../FAQSection/ComputerVisionFAQSection ';
import EcommerceFAQSection from '../FAQSection/EcommerceFAQSection';
import EducationFAQSection from '../FAQSection/EducationFAQSection';
import HealthcareFAQSection from '../FAQSection/FAQSection';
import FinanceFAQSection from '../FAQSection/FinanceFAQSection';
import MachineLearningFAQSection from '../FAQSection/MachineLearningFAQSection ';
import NaturalLanguageProcessingFAQSection from '../FAQSection/NaturalLanguageProcessingFAQSection';
import PredictiveAnalyticsFAQ from '../FAQSection/PredictiveAnalyticsFAQ';
import RetailFAQSection from '../FAQSection/RetailFAQSection';
import SalesForceFAQSection from '../FAQSection/SalesForceFAQSection';

const FAQPage = () => {
  return (
    <div>
      <ChatGptFAQSection />
      <BigDataAnalyticsFAQSection />
      <ComputerVisionFAQSection/>
      <EcommerceFAQSection/>
      <EducationFAQSection/>
      <HealthcareFAQSection/>
      <FinanceFAQSection/>
      <MachineLearningFAQSection/>
      <NaturalLanguageProcessingFAQSection/>
      <PredictiveAnalyticsFAQ/>
      <RetailFAQSection/>
      <SalesForceFAQSection/>
    </div>
  );
};

export default FAQPage;
