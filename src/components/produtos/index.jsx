'use client'
import CardDestaque from "./CardDestaque"
import React, { useEffect, useState } from "react"
import { db } from "../../../config/firebase"
import { collection, getDocs } from "firebase/firestore"


function DatabaseRead({ currentPage, itemsPerPage }) {
  const [produto, setProduto] = useState([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    async function fetchData() {
      try {
        async function getProduto() {
          const dataCollection = collection(db, "produtos")
          const dataSnapshot = await getDocs(dataCollection)
          const dataList = dataSnapshot.docs.map((doc) => doc.data())
          setProduto(dataList.slice(startIndex, endIndex))// Filtra os itens da página atual
        }
        getProduto();
      } catch (error) {
        console.error("Erro:", error)
      }
    }

    fetchData()
  }, [currentPage])

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-5 pb-10 md:grid-cols-2 xl:grid-cols-4">
      {produto.map((item) => {
        console.log(item.imagens)
        if (Array.isArray(item.imagens) && item.imagens.length > 0) {
          const primeiroLink = item.imagens[0]
          return (
            <CardDestaque
              key={item.id}
              prodruto={item.produto}
              valor={item.valor}
              imagem={primeiroLink}
              ratings={item.avaliacao}
            />
          );
        }
      })}
    </div>
  );
}
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1)

  return (
    <div className="pagination space-x-5 ">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`mr-2 rounded-full px-2 
         ${
           currentPage === page
             ? "bg-primary text-white"
             : "text-secondary hover:bg-secondary bg-white"
         }
       `}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default function Produtos() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function fetchTotalItems() {
      try {
        const dataCollection = collection(db, "produtos")
        const dataSnapshot = await getDocs(dataCollection)
        const totalItems = dataSnapshot.docs.length
        const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage)
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error("Erro ao obter total de itens:", error)
      }
    }
    fetchTotalItems();
  }, []);
  return (
    <div>
      <div className="mt-16 flex items-center justify-center gap-5">
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
        <h2 className="text-2xl font-bold text-vermelho">Destaques</h2>
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5"></div>
      <div
        id="produtos"
        className="mt-16 flex items-center justify-center gap-5"
      >
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
        <h2 className="text-2xl font-bold text-vermelho">Produtos</h2>
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5 px-5">
        <DatabaseRead currentPage={currentPage} itemsPerPage={itemsPerPage} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
