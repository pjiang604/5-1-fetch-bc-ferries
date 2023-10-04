import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'


export default function Home() {

  const [data, setData] = useState();

  const API_URL =  'https://www.bcferriesapi.ca/api/TSA/';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json()) //converts the data to json file
      .then(response => {
        console.log(response);
        setData(response); //the data is now stored in the useState
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>

      <main className={`${styles.main}`}>
      <h1>Ferries Leaving Tsawwassen</h1>
      <h2>To: Duke Point (Nanaimo)</h2>
      {
        data && data.DUK.sailings.map((s, index) => {
          return (
            <div key={index}>
              <div>Vessel Name: {s.vesselName}</div>
              <div className={styles.progressBar}>
                <div className={styles.progressBarFill} style={{width: `${s.carFill}%`}}>Progress Bar</div>
              </div>
            </div>
          )
        })
      }
      

      </main>
    </>
  )
}
