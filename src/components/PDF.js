import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function PDF({url}) {
  const {siteConfig} = useDocusaurusContext()
  return (
    <embed src = {`${siteConfig.baseUrl}${url}`} width="100%" height="1000px" type="application/pdf"/>
  );
}
