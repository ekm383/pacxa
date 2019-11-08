import React from "react"
import styled from "styled-components"
import Solution from "../components/Solution"

const Solutions = () => {
  return (
    <SolutionsWrapper>
      <Solution
        category="Managed Services"
        description="Description: Empower your business success with the latest technology solutions without the headaches of running and managing them yourself. Our managed technology services range from as-needed IT support to fully outsourced IT operations. Pacxa is your partner in planning, implementing, and maintaining technology solutions that best fit your needs.
        "
        services={
          <ul>
            <li>Hosted VoIP</li>
          </ul>
        }
        products={
          <ul>
            <li>Microsoft Office 365</li>
          </ul>
        }
      />
      <Solution
        category="Cloud Services"
        description="Description: Powerful. Scalable. Secure. Pacxa’s Cloud Services ease the financial and technical burden of purchasing and maintaining hardware systems and help you leverage the best of both on-island and hyperscale cloud hosting.  Our solutions bring your workloads to you wherever you need to work—from your desk computer or any device—wherever there’s an internet connection. What’s more, our Cloud Services are customizable to your business—fulfilling even the most stringent government and private industry requirements"
        services={
          <ul>
            <li>Hosted Cloud</li>
            <ul>
              <li>Pacxa Regional Cloud</li>
              <li>Virtual Desktop</li>
              <li>Server Hosting</li>
            </ul>
            <li>Managed Cloud</li>
          </ul>
        }
        products={
          <ul>
            <li>Microsoft Office 365</li>
            <li>Microsoft Azure</li>
          </ul>
        }
      />
      <Solution
        category="Enterprise Solutions "
        description="Pacxa holds numerous premier vendor certifications and remains as the only Oracle Platinum and Microsoft Tier-1 Cloud Solutions Provider in Hawaii. We offer a full range of consultative, cloud, and managed services while maintaining our position as the unmatched leader in Oracle Database and enterprise application solutions. Pacxa can also assist any organization navigate the complexities of emerging and disruptive technologies, such as cloud computing and artificial intelligence, while providing strategic guidance and assistance with best practices every step of the way.
        "
        services={
          <ul>
            <li>Enterprise Content Management</li>
            <li>Project Management</li>
          </ul>
        }
        products={
          <ul>
            <li>Oracle</li>
            <li>Service Now</li>
            <li>Red Hat</li>
            <li>Adobe</li>
          </ul>
        }
      />
    </SolutionsWrapper>
  )
}

const SolutionsWrapper = styled.div``

export default Solutions
