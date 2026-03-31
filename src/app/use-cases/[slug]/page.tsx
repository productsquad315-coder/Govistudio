import { notFound } from 'next/navigation';
import UseCasePage, { type UseCaseData } from '@/components/UseCasePage';
import { getUseCaseBySlug, getAllUseCaseSlugs } from '@/lib/useCases';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllUseCaseSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  
  if (!useCase) {
    return { title: 'Use Case Not Found' };
  }

  return {
    title: `${useCase.title} | GOVI Studio`,
    description: useCase.subtitle,
  };
}

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return <UseCasePage data={useCase} />;
}
