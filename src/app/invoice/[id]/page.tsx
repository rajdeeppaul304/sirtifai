import { PublicInvoiceComponent } from "../../../components/sections/invoice/public-invoice-component"

interface InvoicePageProps {
  params: {
    id: string
  }
}

export default function PublicInvoicePage({ params }: InvoicePageProps) {
  return <PublicInvoiceComponent invoiceId={params.id} />
}
