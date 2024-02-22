import { OpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

export const process_doc = async (
  filename: string | undefined,
  filename2: string | undefined,
  question: string
) => {
  const model = new OpenAI({
    modelName: "gpt-3.5-turbo-instruct",
    temperature: 0.9,
    openAIApiKey: "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",
  });
  const res = await model.invoke(question);
  console.log(question);
  console.log(res);

  const loader = new PDFLoader(`./uploads/${filename}`, {
    splitPages: false,
  });
  const loader2 = new PDFLoader(`./uploads/${filename2}`, {
    splitPages: false,
  });

  const doc = await loader.load();
  const doc2 = await loader2.load();

  const combinedDocs = [...doc, ...doc2];

  const vectorStore = await MemoryVectorStore.fromDocuments(
    doc,
    new OpenAIEmbeddings({
      openAIApiKey: "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",
    })
  );

  const vectorStoreRetriever = vectorStore.asRetriever();
  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  console.log(question);
  return await chain.call({
    query: question,
  });
};
