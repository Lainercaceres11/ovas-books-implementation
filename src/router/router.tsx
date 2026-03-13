import { type ReactNode, Suspense, useEffect } from 'react';
import { AllNotes } from '@features/notes';
import { Help, Layout } from '@layouts';
import { Loader } from '@ui';
import { Redirect, Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';

import { ChoiceAvatar } from '@/shared/components/features/avatar';
import { LearningPath } from '@/shared/components/features/learning-path';
import { useOvaStore } from '@/store/ova-store';

import Page404 from '../pages/404';
import Cover from '../pages/cover';

import { paths } from './paths';

import type { RouteType } from '../types/types';
import { OvaPageKind } from '../types/types';

/**
 * Wrapper que marca automáticamente la página como visitada al montarse,
 * excepto las páginas de tipo QUIZ, que deben marcarse manualmente.
 */
const PageVisitTracker = ({ path, kind, children }: { path: string; kind: OvaPageKind; children: ReactNode }) => {
  const markPageVisited = useOvaStore((state) => state.markPageVisited);

  useEffect(() => {
    if (kind !== OvaPageKind.QUIZ) {
      markPageVisited(path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

/**
 * Guarda de navegación:
 * - Sin avatar seleccionado → redirige a /avatar (salvo / y /avatar)
 * - Página de la OVA bloqueada → redirige a /menu
 */
const RouteGuard = ({ children, ovaPath }: { children: ReactNode; ovaPath?: string }) => {
  const selectedAvatarId = useOvaStore((state) => state.selectedAvatarId);
  const pages = useOvaStore((state) => state.pages);

  if (!selectedAvatarId) {
    return <Redirect to="/avatar" />;
  }

  if (ovaPath) {
    const lastVisitedIndex = pages.reduce((acc, p, i) => (p.visited ? i : acc), -1);
    const pageIndex = pages.findIndex((p) => p.path === ovaPath);
    if (pageIndex > lastVisitedIndex + 1) {
      return <Redirect to="/menu" />;
    }
  }

  return <>{children}</>;
};

const App = () => {
  const pages = useOvaStore((state) => state.pages);

  /**
   * Genera las rutas provenientes del archivo paths.
   * Las páginas que no son de tipo QUIZ se marcan como visitadas automáticamente.
   * Las páginas de tipo QUIZ deben marcarse llamando a `markPageVisited` manualmente.
   */
  const createRoutes = (paths: RouteType[]): JSX.Element[] =>
    paths.map((item, index) => (
      <Route key={pages[index].path} path={pages[index].path}>
        <RouteGuard ovaPath={pages[index].path}>
          <Layout>
            <Suspense fallback={<Loader />}>
              <PageVisitTracker path={pages[index].path} kind={item.kind}>
                {item.component}
              </PageVisitTracker>
            </Suspense>
          </Layout>
        </RouteGuard>
      </Route>
    ));

  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/">
          <Layout>
            <Cover />
          </Layout>
        </Route>
        {createRoutes(paths)}
        <Route path="/menu">
          <RouteGuard>
            <Layout>
              <LearningPath />
            </Layout>
          </RouteGuard>
        </Route>
        <Route path="/help">
          <RouteGuard>
            <Layout>
              <Help />
            </Layout>
          </RouteGuard>
        </Route>
        <Route path="/notes">
          <RouteGuard>
            <Layout>
              <AllNotes />
            </Layout>
          </RouteGuard>
        </Route>
        <Route path="/avatar">
          <Layout>
            <ChoiceAvatar />
          </Layout>
        </Route>
        <Route>{(params: { '*': string }) => <Page404 page={params['*']} />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
